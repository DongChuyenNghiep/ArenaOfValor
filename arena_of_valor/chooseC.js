document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.table_rank_C').style.display = 'none';
    document.querySelector('#table_fixture_C').style.display = 'block';
});

function showTableC(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_C').style.display = 'none';
    document.querySelector('.table_rank_C').style.display = 'none';
    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_C').style.display = 'block';
}