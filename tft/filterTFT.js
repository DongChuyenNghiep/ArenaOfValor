document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_test_A').style.display = 'none';
    document.querySelector('.table_test_B').style.display = 'none';
    document.querySelector('.table_test_C').style.display = 'none';
    document.querySelector('.table_test_D').style.display = 'none';
    document.querySelector('.table_test_all').style.display = 'block';
});

function showTable(tableToShow) {
    // Hide all tables
    document.querySelector('.table_test_A').style.display = 'none';
    document.querySelector('.table_test_B').style.display = 'none';
    document.querySelector('.table_test_C').style.display = 'none';
    document.querySelector('.table_test_D').style.display = 'none';
    document.querySelector('.table_test_all').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_test_' + tableToShow).style.display = 'block';
}

function showTables5() {
    // Hide all tables except 'table_test_all'
    document.querySelector('.table_test_A').style.display = 'none';
    document.querySelector('.table_test_B').style.display = 'none';
    document.querySelector('.table_test_C').style.display = 'none';
    document.querySelector('.table_test_D').style.display = 'none';
    document.querySelector('.table_test_all').style.display = 'block';
}
