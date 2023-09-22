document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        // Implement authentication logic here (e.g., validate against a database)
        console.log(`Login: Username - ${username}, Password - ${password}`);
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        // Implement user registration logic here (e.g., store in a database)
        console.log(`Sign Up: Username - ${username}, Password - ${password}`);
    });
});

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading-overlay').classList.add('loaded');
    }, 1000);
});

// Get references to the buttons
const textNoteButton = document.getElementById("text-note-button");
const reminderNoteButton = document.getElementById("reminder-note-button");
const secretNoteButton = document.getElementById("secret-note-button");
const everydayNoteButton = document.getElementById("everyday-note-button");
const textPicNoteButton = document.getElementById("text-pic-note-button");

// Add event listeners to the buttons
textNoteButton.addEventListener("click", () => {
    // Handle text note button click
    // You can perform actions specific to text notes here
    console.log("Text Note button clicked");
});

reminderNoteButton.addEventListener("click", () => {
    // Handle reminder note button click
    // You can perform actions specific to reminder notes here
    console.log("Reminder Note button clicked");
});

secretNoteButton.addEventListener("click", () => {
    // Handle secret note button click
    // You can perform actions specific to secret notes here
    console.log("Secret Note button clicked");
});

everydayNoteButton.addEventListener("click", () => {
    // Handle everyday use note button click
    // You can perform actions specific to everyday use notes here
    console.log("Everyday Use Note button clicked");
});

textPicNoteButton.addEventListener("click", () => {
    // Handle note with text and pic button click
    // You can perform actions specific to notes with text and pic here
    console.log("Note with Text and Pic button clicked");
});
