document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_F').style.display = 'none';
    document.querySelector('.table_fixture_F').style.display = 'block';
});

function showTableF(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_F').style.display = 'none';
    document.querySelector('.table_rank_F').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_F').style.display = 'block';
}
