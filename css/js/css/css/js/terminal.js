const terminal = document.getElementById("terminalText");

const terminalLines = [
  "> Initializing Portfolio...",
  "> Loading User Profile...",
  "> Loading Skills...",
  "> Loading Projects...",
  "> Loading Contact Information...",
  "> Status: Online",
  "> Welcome Khan Abdul Kadir Nepali!"
];

let currentLine = 0;

function startTerminal() {
  if (!terminal) return;

  if (currentLine < terminalLines.length) {
    terminal.innerHTML += terminalLines[currentLine] + "<br>";
    currentLine++;
    setTimeout(startTerminal, 800);
  }
}

window.addEventListener("load", startTerminal);
