const linkElements = document.querySelectorAll(".linkElement");




 
  let currentFocusLink = linkElements[0]; // Set the initial focus on the first link

  linkElements.forEach(link => {
    link.addEventListener("click", function() {
      // Remove the "custom-focus" class from the previously focused link
      currentFocusLink.classList.remove("custom-focus");
      
      // Add the "custom-focus" class to the clicked link
      link.classList.add("custom-focus");
      
      // Update the currently focused link to the clicked link
      currentFocusLink = link;
    });
  });




