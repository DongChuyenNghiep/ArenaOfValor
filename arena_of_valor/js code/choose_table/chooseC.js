document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_C').style.display = 'none';
    document.querySelector('.table_fixture_C').style.display = 'block';
});

function showTableC(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_C').style.display = 'none';
    document.querySelector('.table_rank_C').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_C').style.display = 'block';
}
