document.addEventListener("DOMContentLoaded", function () {
    // Initially hide the rank table and show the fixture table
    document.querySelector('.table_rank_B').style.display = 'none';
    document.querySelector('#table_fixture_B').style.display = 'block';

    // Initialize last clicked button as null
    let lastClickedButton = null;

    // Check if there's a previously clicked button in localStorage
    const storedButtonId = localStorage.getItem('lastClickedButton');
    if (storedButtonId) {
        const storedButton = document.getElementById(storedButtonId);
        if (storedButton) {
            storedButton.focus();
            lastClickedButton = storedButton;
            // Show the corresponding table based on the stored state
            if (storedButtonId === 'button_rankB') {
                showTableB('rank');
            }
        }
    } else {
        // Focus on the first button if no stored button found
        const firstButton = document.getElementById('button_fixtureB');
        if (firstButton) {
            firstButton.focus();
            lastClickedButton = firstButton;
            localStorage.setItem('lastClickedButton', 'button_fixtureB');
        }
    }

    // Add click event listeners to the filter buttons
    document.getElementById('button_fixtureB').addEventListener('click', function () {
        showTableB('fixture');
        lastClickedButton = this;
        localStorage.setItem('lastClickedButton', this.id);
    });

    document.getElementById('button_rankB').addEventListener('click', function () {
        showTableB('rank');
        lastClickedButton = this;
        localStorage.setItem('lastClickedButton', this.id);
    });

    // Add a click event listener to the document body
    document.body.addEventListener('click', function (event) {
        // Focus on the last clicked button regardless of the clicked target
        if (lastClickedButton) {
            lastClickedButton.focus();
        }
    });
});

function showTableB(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_B').style.display = 'none';
    document.querySelector('.table_rank_B').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_B').style.display = 'block';
}
