function showTable(tableToShow) {
    if (tableToShow === 'A') {
        document.querySelector('.table_test_A').style.display = 'block';
        document.querySelector('.table_test_B').style.display = 'none';
        document.querySelector('.table_test_C').style.display = 'none';
        document.querySelector('.table_test_D').style.display = 'none';
    } else if (tableToShow === 'B') {
        document.querySelector('.table_test_A').style.display = 'none';
        document.querySelector('.table_test_B').style.display = 'block';
        document.querySelector('.table_test_C').style.display = 'none';
        document.querySelector('.table_test_D').style.display = 'none';
    }
    else if (tableToShow === 'C') {
        document.querySelector('.table_test_A').style.display = 'none';
        document.querySelector('.table_test_B').style.display = 'none';
        document.querySelector('.table_test_C').style.display = 'block';
        document.querySelector('.table_test_D').style.display = 'none';
    }
    else if (tableToShow === 'D') {
        document.querySelector('.table_test_A').style.display = 'none';
        document.querySelector('.table_test_B').style.display = 'none';
        document.querySelector('.table_test_C').style.display = 'none';
        document.querySelector('.table_test_D').style.display = 'block';
    }
    
}

function showAllTables() {
    document.querySelector('.table_test_A').style.display = 'block';
    document.querySelector('.table_test_B').style.display = 'block';
    document.querySelector('.table_test_C').style.display = 'block';
    document.querySelector('.table_test_D').style.display = 'block';
}