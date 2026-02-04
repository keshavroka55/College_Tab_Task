// ADD TO CART
document.getElementById("addToCart").addEventListener("click", () => {
    document.getElementById("cartMessage").innerText = "✅ Product added to cart!";
});

// FORM VALIDATION
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
        form.reset();
        document.getElementById("formSuccess").innerText = "🎉 Registration successful!";
    }
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    clearErrors();

    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    if (!email.value.includes("@")) {
        showError(email, "Enter valid email");
        isValid = false;
    }

    if (password.value.length < 8) {
        showError(password, "Password must be 8 characters");
        isValid = false;
    }

    if (password.value !== confirm.value) {
        showError(confirm, "Passwords do not match");
        isValid = false;
    }

    return isValid;
}

function showError(input, message) {
    input.classList.add("invalid");
    input.nextElementSibling.innerText = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.querySelectorAll("input").forEach(i => i.classList.remove("invalid"));
}

// BLUR VALIDATION
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("blur", validateForm);
});

// PASSWORD TOGGLE
function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
