document.addEventListener("DOMContentLoaded", function () {
    const linkElements = document.querySelectorAll(".linkElements");
    const groupDivs = document.querySelectorAll(".group");
  
    function toggleDivs(link) {
      const linkIdentifier = link.getAttribute("href");
  
      linkElements.forEach(otherLink => {
        otherLink.classList.remove("custom-focus");
      });
  
      link.classList.add("custom-focus");
  
      groupDivs.forEach((div) => {
        div.classList.remove("visible");
        div.style.display = linkIdentifier === `#${div.id}` ? "block" : "none";
      });
    }
  
    linkElements.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        toggleDivs(link);
  
        const selectedLinkID = link.getAttribute("href").substring(1);
        const sidebarLink = document.querySelector(`[href="#${selectedLinkID}"]`);
  
        if (sidebarLink) {
          sidebarLink.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  
    // This code will handle showing the div based on the URL hash on page load
    const hash = window.location.hash;
    const targetDiv = document.querySelector(hash);
  
    if (targetDiv) {
      toggleDivs(document.querySelector(`[href="${hash}"]`));
    } else {
      // Fallback to default behavior - show the first div
      toggleDivs(linkElements[0]);
    }
  });
  