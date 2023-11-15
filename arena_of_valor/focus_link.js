document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the last visited page from localStorage
  const lastVisitedPage = localStorage.getItem("lastVisitedPage");

  // By default, show the last visited page or 'groupA' if none is stored
  const defaultPage = lastVisitedPage || 'groupA';

  // Show the default page
  document.querySelector(`.${defaultPage}`).classList.add('visible');

  const linkElements = document.querySelectorAll(".linkElements");
  const groupDivs = document.querySelectorAll(".group");

  // Function to show/hide divs based on the selected link
  function toggleDivs(link) {
    const linkIdentifier = link.getAttribute("href");

    // Remove the "custom-focus" class from all links
    linkElements.forEach(otherLink => {
      otherLink.classList.remove("custom-focus");
    });

    // Add the "custom-focus" class to the clicked link
    link.classList.add("custom-focus");

    // Toggle the visibility of the corresponding div based on the clicked link
    groupDivs.forEach((div) => {
      div.classList.remove("visible");
      div.style.display = linkIdentifier === `#${div.id}` ? "block" : "none";
    });

    // Store the selected link's identifier in localStorage
    localStorage.setItem("selectedLinkIdentifier", linkIdentifier);
  }

  // Event listener for link clicks
  linkElements.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      toggleDivs(link);
    });
  });

  // Retrieve the selected link's identifier from localStorage
  const selectedLinkIdentifier = localStorage.getItem("selectedLinkIdentifier");

  // Show the corresponding div based on the stored identifier
  if (selectedLinkIdentifier !== null) {
    const selectedLink = document.querySelector(`[href="${selectedLinkIdentifier}"]`);

    if (selectedLink) {
      toggleDivs(selectedLink);
    }
  }
});
