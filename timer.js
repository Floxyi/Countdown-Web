let startingMinutes;
const timerEl = document.getElementById("timer");
const settingsEl = document.getElementById("settings");
settingsElisHidden = true;
settingsEl.style.opacity = 0;
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
    isStarted = true;
    timerEl.style.color = "#000000";
    clockInterval = setInterval(updateTimer, 1000);
    console.log(0 % 60);
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

function manageSettings() {
  if (settingsElisHidden == true) {
    settingsEl.style.opacity = 100;
    settingsElisHidden = false;
  } else if (settingsElisHidden == false) {
    settingsElisHidden = true;
    settingsEl.style.opacity = 0;
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
    headlineEl.innerHTML = "🕓 Countdown 🕗";
  }
}
