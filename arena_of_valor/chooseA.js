

function showTableA(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_A').style.display = 'none';
    document.querySelector('.table_rank_A').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_A').style.display = 'block';
}
