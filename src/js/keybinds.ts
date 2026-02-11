// keybinds.ts

// Function to handle key press event
function handleKeyPress(event: KeyboardEvent) {
    // Don't trigger if any input elements are focused or if event target is an input
    if (
      document.activeElement?.tagName === "INPUT" ||
      document.activeElement?.tagName === "TEXTAREA" ||
      event.target instanceof HTMLInputElement
    ) {
      return
    }

    // Check if the pressed key is 'h' or 'p' or 'b' or 'l'
    switch (event.key.toLowerCase()) {
      case "h":
        window.location.href = '/';
        break
      case "b":
        window.location.href = '/blog';
        break
      case "p":
        window.location.href = '/projects';
        break
      case "w":
        window.location.href = '/work';
        break
      case "k":
        window.location.href = '/hackathons';
        break
      // case "f":
      //   window.location.href = '/fun';
      //   break
    }

 

  }
  
  // Add event listener for keydown event
  document.addEventListener('keydown', handleKeyPress);
  