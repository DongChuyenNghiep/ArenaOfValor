document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.groupA').style.display = 'block';
    document.querySelector('.groupB').style.display = 'none';

});

function showTable(tableToShow) {
    // Hide all tables
    document.querySelector('.groupA').style.display = 'none';
    document.querySelector('.groupB').style.display = 'none';

    // Show the selected table
    document.querySelector('.group' + tableToShow).style.display = 'block';
}

