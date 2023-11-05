let SHEET_RANGE_FINAL = 'A76:N83';
let SHEET_ID_FINAL = '1mHt4b8F3Otm0ZLKG98VQo5Q5U_mcw8N-eFvoorUukYU';
let SHEET_TITLE_FINAL = 'Bảng xếp hạng';
let FULL_URL_FINAL = `https://docs.google.com/spreadsheets/d/${SHEET_ID_FINAL}/gviz/tq?sheet=${SHEET_TITLE_FINAL}&range=${SHEET_RANGE_FINAL}`;

fetch(FULL_URL_FINAL)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let dataBody = document.getElementById('data_body_final');
        for (let i = 0; i < data.table.rows.length; i++) {
            let rowData = data.table.rows[i].c;
            let row = document.createElement('tr');

            let cell1 = document.createElement('td');
            let cell2 = document.createElement('td');
            let cell3 = document.createElement('td');
            let cell4 = document.createElement('td');
            let cell5 = document.createElement('td');
            let cell6 = document.createElement('td');
            let cell7 = document.createElement('td');
            let cell8 = document.createElement('td');
            let cell9 = document.createElement('td');
            let cell10 = document.createElement('td');
            let cell11 = document.createElement('td');
            let cell12 = document.createElement('td');
            let cell13 = document.createElement('td');
            let cell14 = document.createElement('td');

 

            cell1.textContent = rowData[0].v;
            cell2.textContent = rowData[1].v;
            cell3.textContent = rowData[2].v;
            cell4.textContent = rowData[3].v;
            cell5.textContent = rowData[4].v;
            cell6.textContent = rowData[5].v;
            cell7.textContent = rowData[6].v;
            cell8.textContent = rowData[7].v;
            cell9.textContent = rowData[8].v;
            cell10.textContent = rowData[9].v;
            cell11.textContent = rowData[10].v;
            cell12.textContent = rowData[11].v;
            cell13.textContent = rowData[12].v;
            cell14.textContent = rowData[13].v;


            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            row.appendChild(cell7);
            row.appendChild(cell8);
            row.appendChild(cell9);
            row.appendChild(cell10);
            row.appendChild(cell11);
            row.appendChild(cell12);
            row.appendChild(cell13);
            row.appendChild(cell14);

            if (i == 0) {
                row.className = "golden";
            }
            if (i == 1) {
                row.className = "silver";
            }
            if (i == 2) {
                row.className = "bronze";
            }
            dataBody.appendChild(row);
        }
    });
