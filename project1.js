// Select form and input fields
const form = document.querySelector("form");
const username = document.querySelector("input[type='text']");
const password = document.querySelector("input[type='password']");

// Login event
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const userValue = username.value.trim();
    const passValue = password.value.trim();

    // Basic validation
    if (userValue === "" || passValue === "") {
        alert("Please fill in both fields");
        return;
    }

    // Dummy login check (replace with backend later)
    if (userValue === "admin" && passValue === "1234") {
        alert("Login successful");
        // Redirect example:
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});