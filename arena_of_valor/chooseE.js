document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_E').style.display = 'none';
    document.querySelector('.table_fixture_E').style.display = 'block';
});

function showTableE(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_E').style.display = 'none';
    document.querySelector('.table_rank_E').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_E').style.display = 'block';
}
