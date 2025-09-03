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