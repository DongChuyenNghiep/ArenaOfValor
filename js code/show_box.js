function show() {
    const showWordsElements = document.querySelectorAll('.showWords1');
    const wordBoxElements = document.querySelectorAll('.wordBox1');
    const isBoxVisible = Array.from({ length: showWordsElements.length }).fill(false);
  
    showWordsElements.forEach((showWords, index) => {
      showWords.addEventListener('click', function (e) {
        e.preventDefault();
  
        if (isBoxVisible[index]) {
          wordBoxElements[index].style.display = 'none'; // Hide the box
        } else {
          wordBoxElements[index].style.display = 'block'; // Show the box
        }
  
        isBoxVisible[index] = !isBoxVisible[index]; // Toggle the state
      });
    });
  } 