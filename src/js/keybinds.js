// keybinds.js

// Function to handle key press event
function handleKeyPress(event) {
    // Check if the pressed key is 'h' or 'p' or 'b' or 'l'  or  (keyCode 72)
    if (event.keyCode === 72) {
      // Navigate to the home page
      console.log(event.key)
      window.location.href = '/';
    }
    if (event.keyCode === 80) {
      // Navigate to the home page
      window.location.href = '/projects';
    }
    if (event.keyCode === 66) {
      // Navigate to the home page
      window.location.href = '/blog';
    }
    if (event.keyCode === 76) {
      // Navigate to the home page
      window.location.href = '/links';
    }
  }
  
  // Add event listener for keydown event
  document.addEventListener('keydown', handleKeyPress);
  