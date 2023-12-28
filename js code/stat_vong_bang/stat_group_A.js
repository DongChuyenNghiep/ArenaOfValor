document.addEventListener('DOMContentLoaded', async function() {
    try {
        const fetchAndCreateTableRows = async (fullURL, startIndex, targetID) => {
            const res = await fetch(fullURL);
            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
            }
            const rep = await res.text();
            const data = JSON.parse(rep.substr(47).slice(0, -2));
            const dataBody = document.getElementById(targetID);
            
            for (let i = startIndex; i < startIndex + 5; i++) {
                const rowData = data.table.rows[i].c;
                const row = document.createElement('tr');
                
                for (let j = 0; j < rowData.length; j++) {
                    const cell = document.createElement('td');
                    cell.textContent = rowData[j].v;
                    row.appendChild(cell);
                }
                dataBody.appendChild(row);
            }
        };

        const sheets = [
            { title: 'Group A', range: 'B3:G122', targetLeft: 'team-left-A-', targetRight: 'team-right-A-' },
            { title: 'Group B', range: 'B3:G133', targetLeft: 'team-left-B-', targetRight: 'team-right-B-' },
            { title: 'Group C', range: 'B3:G122', targetLeft: 'team-left-C-', targetRight: 'team-right-C-' },
            { title: 'Group D', range: 'B3:G133', targetLeft: 'team-left-D-', targetRight: 'team-right-D-' },
            { title: 'Group E', range: 'B3:G122', targetLeft: 'team-left-E-', targetRight: 'team-right-E-' },
            { title: 'Group F', range: 'B3:G133', targetLeft: 'team-left-F-', targetRight: 'team-right-F-' },
            { title: 'Group G', range: 'B3:G122', targetLeft: 'team-left-G-', targetRight: 'team-right-G-' },
            { title: 'Group H', range: 'B3:G133', targetLeft: 'team-left-H-', targetRight: 'team-right-H-' },
            // ... (other groups)
        ];

        const SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
        const fetchPromises = sheets.map(async (sheet) => {
            const fullURL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${sheet.title}&range=${sheet.range}`;
            
            const res = await fetch(fullURL);
            if (!res.ok) {
                console.error(`Failed to fetch ${sheet.title} data: ${res.status} ${res.statusText}`);
                return; // Move to the next sheet in case of a fetch failure
            }

            const rep = await res.text();
            const data = JSON.parse(rep.substr(47).slice(0, -2));
            
            const leftPromises = [];
            const rightPromises = [];
            for (let i = 0; i < 12; i++) {
                leftPromises.push(fetchAndCreateTableRows(fullURL, i * 10, `${sheet.targetLeft}${i + 1}`));
                rightPromises.push(fetchAndCreateTableRows(fullURL, (i * 10) + 5, `${sheet.targetRight}${i + 1}`));
            }

            await Promise.all([...leftPromises, ...rightPromises]);
        });

        await Promise.all(fetchPromises);
    } catch (error) {
        console.error('Error occurred:', error);
    }
});
