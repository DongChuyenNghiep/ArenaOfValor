document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_D').style.display = 'none';
    document.querySelector('.table_fixture_D').style.display = 'block';
});

function showTableD(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_D').style.display = 'none';
    document.querySelector('.table_rank_D').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_D').style.display = 'block';
}
