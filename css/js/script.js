// Typing Effect
const typing = document.getElementById("typing");

const words = [
  "Cyber Security Learner",
  "Web Developer",
  "Ethical Hacking Enthusiast",
  "Welcome to Nepali Zone"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

window.onload = typeEffect;

console.log("Welcome to Khan Abdul Kadir Nepali Portfolio");
