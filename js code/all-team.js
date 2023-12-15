let SHEET_RANGE_TABLE = 'B1:AN11';
SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o'
SHEET_TITLE = 'All team'
let FULL_URL_TABLE = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_TABLE}`;

fetch(FULL_URL_TABLE)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        for (let k = 0; k < 38; k++) {
            let dataBody = document.getElementById('table-player' + k);

            // Assuming rowData[0] corresponds to the image URL
            let imageSrc = data.table.rows[10].c[k].v; // Modify this according to your data structure
            let imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.classList.add('player-image'); // Add any necessary classes or attributes

            // Append the image to the "image-logo" div
            let imageContainer = dataBody.closest('.box1').querySelector('.image-logo');
            imageContainer.appendChild(imageElement);

            for (let i = 2; i < 8; i++) {
                let rowData = data.table.rows[i].c;
                let row = document.createElement('tr');
                let cell = document.createElement('td');
                cell.classList.add('name');

                cell.textContent = rowData[k].v; // Assuming k corresponds to columns 0-37
                row.appendChild(cell);

                dataBody.appendChild(row);
            }

            // Adding text from rowData[0] to the <section class="seed" id="seed">
            let seedSection = document.getElementById('team'+k);
            let seedText = document.createElement('p');
            seedText.textContent = data.table.rows[0].c[k].v; // Assuming rowData[0] contains the text for the <p> element
            seedSection.appendChild(seedText);
        }
    });