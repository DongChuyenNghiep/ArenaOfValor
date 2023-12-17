
let SHEET_RANGE_C_1 = 'E1:F4';

let FULL_URL_TABLE_C = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_C_1}`;

fetch(FULL_URL_TABLE_C)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let dataBody = document.getElementById('bangC');
        for (let i = 0; i < data.table.rows.length; i++) {
            let rowData = data.table.rows[i].c;
let row = document.createElement('tr');
let cell1 = document.createElement('td');
let cell2 = document.createElement('td');

// Assuming rowData[0].v contains the source URL for the image
let imageSrc = "/"+rowData[0].v;
let image = document.createElement('img');
image.src = imageSrc;
image.classList.add('team-logo')

cell1.appendChild(image); // Append the img element to cell1
function updateTextContentA() {
    if (window.innerWidth > 768) {
      cell2.textContent = rowData[1].v;

    } else {

        cell2.textContent = rowData[2].v;
    }
  }
  // Initial setup based on window width
  updateTextContentA();

  // Update text content on window resize
  window.addEventListener('resize', updateTextContentA);

row.appendChild(cell1);
row.appendChild(cell2);


            dataBody.appendChild(row);
        }
    });