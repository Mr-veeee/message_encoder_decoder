// script.js

// Get the message, key, and mode elements from the DOM.
const messageInput = document.querySelector("#message");
const keyInput = document.querySelector("#key");
const modeSelect = document.querySelector("#mode");

// Add an event listener to the submit button.
document.querySelector("#submit-button").addEventListener("click", function() {
    // Get the message, key, and mode values.
    const message = messageInput.value;
    const key = keyInput.value;
    const mode = modeSelect.value;

    // Make a POST request to the Flask application to encode or decode the message.
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message,
            key,
            mode,
        }),
    })
        .then(response => response.json())
        .then(data => {
            // Set the result element with the encoded or decoded message.
            document.querySelector("#result").value = data.result;
        });
});
