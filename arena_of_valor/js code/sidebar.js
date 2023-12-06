function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

document.body.addEventListener('touchend', function(event) {
  var sidebar = document.getElementById("mySidebar");
  var targetElement = event.target; // Element that triggered the event

  // Check if the clicked element is not within the sidebar
  if (sidebar.style.display === "block" && !sidebar.contains(targetElement)) {
    w3_close(); // Close the sidebar
  }
});

// Get all the links inside the sidebar
var sidebarLinks = document.querySelectorAll("#mySidebar .linkElements");

// Attach click event listeners to all sidebar links
sidebarLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    w3_close(); // Close the sidebar when a link is clicked
  });
});
