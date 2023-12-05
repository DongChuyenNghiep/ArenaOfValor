const linkContainers = document.querySelectorAll('.links-container');

linkContainers.forEach((container, containerIndex) => {
  const links = container.querySelectorAll('.focusable-link');

  links.forEach((link, linkIndex) => {
    link.addEventListener('click', function() {
      // Remove focus class from all links in this container
      links.forEach(link => link.classList.remove('focus'));
      // Add focus class to the clicked link
      this.classList.add('focus');

      // Store the index of the clicked link in localStorage for this container
      localStorage.setItem(`focusedLink-${containerIndex}`, linkIndex.toString());
    });
  });

  // Check localStorage for the focusedLink item for this container
  const focusedLinkIndex = localStorage.getItem(`focusedLink-${containerIndex}`);
  if (focusedLinkIndex !== null) {
    // Apply focus to the link based on the stored index for this container
    links[focusedLinkIndex].classList.add('focus');
  }
});