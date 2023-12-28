
document.addEventListener('DOMContentLoaded', function() {
    let SHEET_RANGE_TABLE = 'B3:G133';
let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
let SHEET_TITLE_DAY_G = 'Group G';
let FULL_URL_BANG_G = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_DAY_G}&range=${SHEET_RANGE_TABLE}`;



function createTableRows(startIndex, targetID, data) {
    let dataBody = document.getElementById(targetID);
    for (let i = startIndex; i < startIndex + 5; i++) {
        let rowData = data.table.rows[i].c;
        let row = document.createElement('tr');
        for (let j = 0; j < rowData.length; j++) {
            let cell = document.createElement('td');
            cell.textContent = rowData[j].v;
            row.appendChild(cell);
        }
        dataBody.appendChild(row);
    }
}

fetch(FULL_URL_BANG_G)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        for (let i = 0; i < 12; i++) {
            createTableRows(i * 10, `team-left-G-${i + 1}`, data);
            createTableRows((i * 10) + 5, `team-right-G-${i + 1}`, data);
        }
    });
});