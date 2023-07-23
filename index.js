    // Function to play the sound corresponding to the button clicked
    function playSound(sound) {
        const audio = new Audio(`${sound}.wav`);
        audio.play();
    }
  
    // Function to play sound when a key is pressed
    function playSoundOnKey(key) {
        const button = document.querySelector(`[data-key="${key}"]`);
        if (button) {
        const sound = button.getAttribute("data-sound");
        playSound(sound);
        button.classList.add("active");
        }
    }

    // Function to remove the "active" class when a key is released
    function removeActiveClass(event) {
        const button = document.querySelector(`[data-key="${event.code}"]`);
        if (button) {
            button.classList.remove("active");
        }
    }

  
    // Add event listeners to each drum button
    const drumButtons = document.querySelectorAll(".drum-button");
    drumButtons.forEach((button) => {
        button.addEventListener("click", () => {
        const sound = button.getAttribute("data-sound");
        playSound(sound);
        });
    });
  
    // Add event listener for keyboard key press
    document.addEventListener("keydown", (event) => {
        // Use event.key to get the pressed key
        const key = event.code;
        playSoundOnKey(key);
    });

    // Add event listener for keyboard key release to remove the "active" class
    document.addEventListener("keyup", removeActiveClass);