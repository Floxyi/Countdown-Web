let startingMinutes;
const timerEl = document.getElementById("timer");
const settingsEl = document.getElementById("settings");
let settingsElisShown = false;
settingsEl.style.opacity = 0;
const blendEl = document.getElementById("blend");
blendEl.style.opacity = 0;
blendEl.style.pointerEvents = "none";
let isStarted = false;
let clockInterval;
let time = 0;
let hasTime = false;
const HeadlineInputEl = document.getElementById("HeadlineInput");
const headlineEl = document.getElementById("headline");
const sliderTextSeizeEl = document.getElementById("sliderTextSeize");
const textSeizeValueEl = document.getElementById("textSeizeValue");

function startTimer() {
  if (isStarted == false) {
    clockInterval = setInterval(updateTimer, 1000);
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      timerEl.style.color = "#ffffff";
    } else {
      timerEl.style.color = "#000000";
    }
    isStarted = true;
  }
}

function stopTimer() {
  if (isStarted == true) {
    isStarted = false;
    timerEl.style.color = "#ff0000";
    clearInterval(clockInterval);
  }
}

function restartTimer() {
  time = 0;
  minutes = 0;
  seconds = 0;
  hours = 0;
  stopTimer();
  updateTimer();
}

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  timerEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  time++;
}
manageSettings();
function manageSettings() {
  if (settingsElisShown == true) {
    settingsEl.style.opacity = 100;
    blendEl.style.opacity = "30%";
    settingsEl.style.pointerEvents = "all";
    blendEl.style.pointerEvents = "all";
    settingsElisShown = false;
  } else if (settingsElisShown == false) {
    settingsElisShown = true;
    settingsEl.style.opacity = 0;
    blendEl.style.opacity = 0;
    settingsEl.style.pointerEvents = "none";
    blendEl.style.pointerEvents = "none";
  }
}

sliderTextSeizeEl.oninput = function () {
  textSeizeValueEl.innerHTML = this.value;
  timerEl.style.fontSize = this.value + "px";
};

updateHeadlineInterval = setInterval(updateHeadline, 10);

function updateHeadline() {
  headline = HeadlineInputEl.value;
  if (headline == headline) {
    headlineEl.innerHTML = headline;
  }
  if (headline == "") {
    headlineEl.innerHTML = "🕓 Timer 🕗";
  }
}
