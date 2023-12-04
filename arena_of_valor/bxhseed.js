
let SHEET_RANGE_TABLE = 'A146:K183';

let FULL_URL_TABLE = `https://docs.google.com/spreadsheets/d/${SHEET_ID_1}/gviz/tq?sheet=${SHEET_TITLE_DAY_1}&range=${SHEET_RANGE_TABLE}`;

fetch(FULL_URL_TABLE)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let dataBody = document.getElementById('table_ranktable_D');
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
let cell0 = document.createElement('td');
// Assuming rowData[0].v contains the source URL for the image
cell0.textContent = rowData[0].v;
let imageSrc = "/"+rowData[1].v;
let image = document.createElement('img');
image.src = imageSrc;
image.classList.add('team-logo')

cell1.appendChild(image); // Append the img element to cell1
cell3.textContent = rowData[3].v;
cell4.textContent = rowData[4].v;
cell5.textContent = rowData[5].v;
cell6.textContent = rowData[6].v;
cell7.textContent = rowData[7].v;
cell8.textContent = rowData[8].v;
cell9.textContent = rowData[9].v;
function updateTextContent() {
    if (window.innerWidth > 768) {
      cell2.textContent = rowData[2].v;

    } else {

        cell2.textContent = rowData[10].v;
    }
  }
  // Initial setup based on window width
  updateTextContent();

  // Update text content on window resize
  window.addEventListener('resize', updateTextContent);

row.appendChild(cell0);
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
row.appendChild(cell4);
row.appendChild(cell5);
row.appendChild(cell6);
row.appendChild(cell7);
row.appendChild(cell8);
row.appendChild(cell9);


            dataBody.appendChild(row);
        }
    });