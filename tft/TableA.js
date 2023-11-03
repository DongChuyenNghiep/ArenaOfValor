let SHEET_ID = '1mHt4b8F3Otm0ZLKG98VQo5Q5U_mcw8N-eFvoorUukYU';
let SHEET_TITLE = 'Bảng xếp hạng';
let SHEET_RANGE_A = 'B4:G11';

let FULL_URL_A = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_A}`;

fetch(FULL_URL_A)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let dataBody = document.getElementById('data_body_A');
        for (let i = 0; i < data.table.rows.length; i++) {
            let rowData = data.table.rows[i].c;
            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            let cell2 = document.createElement('td');
            let cell3 = document.createElement('td');
            let cell4 = document.createElement('td');
            let cell5 = document.createElement('td');
            let cell6 = document.createElement('td');

            cell1.textContent = rowData[0].v;
            cell2.textContent = rowData[1].v;
            cell3.textContent = rowData[2].v;
            cell4.textContent = rowData[3].v;
            cell5.textContent = rowData[4].v;
            cell6.textContent = rowData[5].v;

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            


            dataBody.appendChild(row);
        }
    });
