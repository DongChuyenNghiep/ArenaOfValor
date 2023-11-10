document.addEventListener("DOMContentLoaded", function () {
    // Initially hide the rank table and show the fixture table
    document.querySelector('.table_rank_D').style.display = 'none';
    document.querySelector('#table_fixture_D').style.display = 'block';

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
            if (storedButtonId === 'button_rankD') {
                showTableD('rank');
            }
        }
    } else {
        // Focus on the first button if no stored button found
        const firstButton = document.getElementById('button_fixtureD');
        if (firstButton) {
            firstButton.focus();
            lastClickedButton = firstButton;
            localStorage.setItem('lastClickedButton', 'button_fixtureD');
        }
    }

    // Add click event listeners to the filter buttons
    document.getElementById('button_fixtureD').addEventListener('click', function () {
        showTableD('fixture');
        lastClickedButton = this;
        localStorage.setItem('lastClickedButton', this.id);
    });

    document.getElementById('button_rankD').addEventListener('click', function () {
        showTableD('rank');
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

function showTableD(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_D').style.display = 'none';
    document.querySelector('.table_rank_D').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_D').style.display = 'block';
}
