var welcome;
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
if (hour < 12) {
    welcome = "Good Morning,";
} else if (hour < 17) {
    welcome = "Good Afternoon,";
} else {
    welcome = "Good Evening,";
}

var greeting = document.querySelector(".time-greeting");

if (greeting) {
    greeting.innerHTML = "<h3>" + welcome + "</h3>";
}

document.getElementById("current-year").textContent = new Date().getFullYear();

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the value from the input field
    const text = this.querySelector("input[type='text']").value;
    const date = new Date().toLocaleDateString();
    const content = date + "<br>" + text;

    // Check if the input is not empty before creating a bubble
    if (text.trim() === "") {
        return;
    }

    // Call the createBubble function with the text
    createBubble(content);

    // Clear the input field after the bubble is created
    this.querySelector("input[type='text']").value = "";
});

function createBubble(content) {
    // Create the bubble element
    const bubble = document.createElement("div");
    bubble.innerHTML = content;
    bubble.classList.add("bubble");

    // Get the window dimensions
    const fullWidth = window.innerWidth - 150; // Subtract bubble width to keep it within viewport
    const fullHeight = window.innerHeight - 150; // Subtract bubble height to keep it within viewport

    // Generate a random position
    const randomX = Math.round(Math.random() * fullWidth);
    const randomY = Math.round(Math.random() * fullHeight);

    // Apply the random position to the bubble
    bubble.style.position = "absolute";
    bubble.style.left = randomX + "px";
    bubble.style.top = randomY + "px";

    // Add the bubble to the page
    document.body.appendChild(bubble);
}

// This function removes all elements with the class 'bubble'
function removeAllBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.remove();
    });
}

// Get the button element
const removeButton = document.querySelector('.removeBubbles');

// Add a click event listener to the button
if (removeButton) {
    removeButton.addEventListener('click', removeAllBubbles);
}