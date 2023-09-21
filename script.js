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