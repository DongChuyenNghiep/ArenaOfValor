document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_G').style.display = 'none';
    document.querySelector('.table_fixture_G').style.display = 'block';
});

function showTableG(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_G').style.display = 'none';
    document.querySelector('.table_rank_G').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_G').style.display = 'block';
}
