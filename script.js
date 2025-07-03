// Typing animation
const roles = [
  "Frontend Developer",
  "React Learner",
  "Python Coder",
  "Internship Seeker"
];

let index = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing");

function type() {
  if (charIndex < roles[index].length) {
    typingSpan.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
