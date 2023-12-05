document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_H').style.display = 'none';
    document.querySelector('.table_fixture_H').style.display = 'block';
});

function showTableH(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_H').style.display = 'none';
    document.querySelector('.table_rank_H').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_H').style.display = 'block';
}
