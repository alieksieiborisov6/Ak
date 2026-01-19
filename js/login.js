const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const title = document.getElementById("title");

function showRegister() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    title.textContent = "Register";
}

function showLogin() {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    title.textContent = "Login";
}

// DEMO LOGIC
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login successful (demo)");
});

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Registration successful (demo)");
});
