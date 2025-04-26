/* scripts.js */

// Store and retrieve user preferences using localStorage
function storePreferences(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error("Error storing preferences:", error);
    }
}

function retrievePreferences(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error("Error retrieving preferences:", error);
        return null;
    }
}

// Trigger animation dynamically
document.getElementById("animateButton").addEventListener("click", function () {
    const button = this;

    // Apply the bounce animation class
    button.classList.add("bouncing");

    // Remove the animation class after animation completes
    setTimeout(() => {
        button.classList.remove("bouncing");
    }, 800);

    // Store user preference in localStorage
    storePreferences("buttonClicked", "true");

    // Retrieve and log user preferences
    const preference = retrievePreferences("buttonClicked");
    console.log("Button clicked preference:", preference);
});
