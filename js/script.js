// DARK MODE TOGGLE SCRIPT
// Handles switching between light and dark modes

  const btn = document.getElementById("theme-toggle");

  // download the saved state of the theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the theme state
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

// ===== GREETING FEATURE =====

const greetBtn = document.getElementById("greet-btn");
const usernameInput = document.getElementById("username");
const greetingMessage = document.getElementById("greeting-message");
const errorMessage = document.getElementById("error-message");

greetBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();

  if (name === "") {
    errorMessage.textContent = "Please enter your name!";
    greetingMessage.textContent = "";
    return;
  }

  errorMessage.textContent = "";

  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

 greetingMessage.textContent = `${greeting}, ${name}! Welcome to my portfolio 💜`; greetingMessage.classList.add("show");
  localStorage.setItem("username", name);
});

window.addEventListener("load", () => {
  const savedName = localStorage.getItem("username");

  if (savedName) {
    greetingMessage.textContent = `Welcome back, ${savedName}! 💜`;
  }
});