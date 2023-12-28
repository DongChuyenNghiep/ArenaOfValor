document.addEventListener('DOMContentLoaded', function() {
    const SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
    SHEET_RANGE_TABLE = 'B3:G122';
    const SHEET_TITLE_DAY_A = 'Group A';
    const SHEET_TITLE_DAY_B = 'Group B';
    const SHEET_TITLE_DAY_C = 'Group C';
    const SHEET_TITLE_DAY_D = 'Group D';
    const SHEET_TITLE_DAY_E = 'Group E';
    const SHEET_TITLE_DAY_F = 'Group F';
    const SHEET_TITLE_DAY_G = 'Group G';
    const SHEET_TITLE_DAY_H = 'Group H';

    function createTableRows(startIndex, targetID, data) {
        const dataBody = document.getElementById(targetID);
        if (!dataBody || !data || !data.table || !data.table.rows) {
            console.error('Invalid data or target element.');
            return;
        }
        for (let i = startIndex; i < startIndex + 5; i++) {
            let rowData = data.table.rows[i]?.c; // Using optional chaining to handle potential undefined rows
            if (!rowData) {
                console.error('Invalid row data.');
                continue;
            }
            let row = document.createElement('tr');
            for (let j = 0; j < rowData.length; j++) {
                let cell = document.createElement('td');
                cell.textContent = rowData[j]?.v || ''; // Using optional chaining to handle potential undefined cell values
                row.appendChild(cell);
            }
            dataBody.appendChild(row);
        }
    }
    
    function fetchDataAndCreateTables(sheetTitle, groupPrefix) {
        
        const fullURL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${sheetTitle}&range=${SHEET_RANGE_TABLE}`;
        
        fetch(fullURL)
            .then((res) => res.text())
            .then((rep) => {
                try {
                    let data = JSON.parse(rep.substr(47).slice(0, -2));
                    for (let i = 0; i < 12; i++) {
                        createTableRows(i * 10, `team-left-${groupPrefix}-${i + 1}`, data);
                        createTableRows((i * 10) + 5, `team-right-${groupPrefix}-${i + 1}`, data);
                    }
                } catch (error) {
                    console.error("Error while processing data:", error);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    
    fetchDataAndCreateTables(SHEET_TITLE_DAY_A, 'A');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_B, 'B');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_C, 'C');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_D, 'D');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_E, 'E');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_F, 'F');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_G, 'G');
    fetchDataAndCreateTables(SHEET_TITLE_DAY_H, 'H');
});
