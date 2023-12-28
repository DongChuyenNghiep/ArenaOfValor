function banpick() {
    let SHEET_RANGE_A = 'H3:I133';
    let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
    let SHEET_TITLE_QUALIFIER = 'Group A'
    let FULL_URL_A_1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_QUALIFIER}&range=${SHEET_RANGE_A}`;

    fetch(FULL_URL_A_1)
        .then((res) => res.text())
        .then((rep) => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let pickbox = document.querySelectorAll('.pick-box');
            let banBoxes = document.querySelectorAll('.ban-box'); // Select all elements with the class 'ban-box'
            for (let i = 0; i < data.table.rows.length; i++) {
                let rowData = data.table.rows[i].c;
                let imgElement = banBoxes[i].querySelector('img'); // Select the img inside the specific '.ban-box'
                let pickimgElement = pickbox[i].querySelector('img');
                if (imgElement) {
                    imgElement.src = 'heroes/' + rowData[0].v + '.webp'; // Assuming the 'v' property is at index 0
                    pickimgElement.src = 'heroes/' + rowData[1].v + '.webp'; // Assuming the 'v' property is at index 0
                }
            }


        });
}