function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('mySidebar');
  var sidebarButton = document.getElementById('w3');

  // Check if the clicked element is not the sidebar or sidebar button
  if (event.target !== sidebar && event.target !== sidebarButton) {
      w3_close();
  }
});

document.addEventListener('touchstart', function(event) {
  var sidebar = document.getElementById('mySidebar');
  var sidebarButton = document.getElementById('w3');

  // Check if the touched element is not the sidebar or sidebar button
  if (event.target !== sidebar && event.target !== sidebarButton) {
      w3_close();
  }
});