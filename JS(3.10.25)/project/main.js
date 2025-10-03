import greet from './greet.js';

const input = document.getElementById("nameInput");
const btn = document.getElementById("greetBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    message.textContent = greet(name);
  } else {
    message.textContent = "Please enter your name.";
  }
});
