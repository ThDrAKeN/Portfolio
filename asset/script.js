const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Axel ! <br> I'm 19 years old and I'm an apprentice at aftec !",
  skills:
    '<span class="code">Langages:</span> HTML, CSS, JavaScript, PHP<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> Cordova, Bootstrap',
  education:
    "AFTEC Formation, Orléans | 2016-2019<br>BTS SIO (SLAM) — Developer 💻<br><br>St. Paul Bourdon Blanc, Orléans | 2016-2019<br>BAC Pro SeN — Computer networks and communicating systems<br><br>St. Paul Bourdon Blanc, Orléans | 2016-2018<br>BEP SeN — Computer networks and communicating systems",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "Experience😥",
  contact:
    "",
  sudo:
    "Really ? 😳"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">visitor@${ip}:<span class="directory">~/portfolio</span><span class="white">$ ${input}</span></div> `;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);






var ip;

$.getJSON({
  url: "https://api.ipify.org?format=json"
}).done(function (data, status, xhr) {
  ip = data.ip;
  $(".ip").html(data.ip);
}).fail(function (xhr, status, error) {
  ip = "local";
  $(".ip").html("local");
});



var terminal = document.getElementById("terminal");
var audio = new Audio('asset/err_sound.mp3');
audio.volume = 0.2;

function effect() {
  audio.play();
  terminal.classList.add('blink');
  setTimeout(removeEff, 1000); // check again in a second
}

function removeEff() {
  terminal.classList.remove('blink');
}


function effect2() {
  audio.play();
  terminal.classList.add('shake');
  setTimeout(effect2Rm, 500); // check again in a second
}

function effect2Rm() {
  terminal.classList.remove('shake');

}





function displayClose() {
  var close = document.getElementById("close");
  close.classList.add("fas");
  close.classList.add("fa-times")

}

function hideClose() {
  var close = document.getElementById("close");
  close.classList.remove("fas");
  close.classList.remove("fa-times")
}




function displayMin() {
  var close = document.getElementById("Min");
  close.classList.add("fas");
  close.classList.add("fa-minus")

}

function hideMin() {
  var close = document.getElementById("Min");
  close.classList.remove("fas");
  close.classList.remove("fa-minus")
}



function displayAgr() {
  var close = document.getElementById("Agr");
  close.classList.add("fas");
  close.classList.add("fa-expand-alt")

}

function hideAgr() {
  var close = document.getElementById("Agr");
  close.classList.remove("fas");
  close.classList.remove("fa-expand-alt")
}