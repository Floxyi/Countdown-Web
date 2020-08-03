let startingMinutes;
const countdownEl = document.getElementById("countdown");
const InputEl = document.getElementById("Input");
const settingsEl = document.getElementById("settings");
let settingsElisShown = false;
settingsEl.style.opacity = 0;
const blendEl = document.getElementById("blend");
blendEl.style.opacity = 0;
blendEl.style.pointerEvents = "none";
const sliderTextSeizeEl = document.getElementById("sliderTextSeize");
const textSeizeValueEl = document.getElementById("textSeizeValue");
let isStarted = false;
let clockInterval;
let time;
let hasTime = false;
let sendNotification = false;
const HeadlineInputEl = document.getElementById("HeadlineInput");
const headlineEl = document.getElementById("headline");
let headline = "🕓 Countdown 🕗";
const FinishInputEl = document.getElementById("FinishInput");
let finishMessage = "Time is up!";
const timeBarEl = document.getElementById("timeBar");
let width = 0;

function startCountdown() {
  if (hasTime == false || InputEl.value != startingMinutes) {
    hasTime = true;
    startingMinutes = InputEl.value;
    startingMinutes = parseFloat(startingMinutes);

    if (startingMinutes != startingMinutes) {
      startingMinutes = 10;
      InputEl.value = startingMinutes;
    }

    time = startingMinutes * 60;
  }

  if (isStarted == false) {
    isStarted = true;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      countdownEl.style.color = "#ffffff";
    } else {
      countdownEl.style.color = "#000000";
    }
    clockInterval = setInterval(updateCountdown, 1000);
  }
}

function stopCountdown() {
  if (isStarted == true) {
    isStarted = false;
    countdownEl.style.color = "#ff0000";
    clearInterval(clockInterval);
  }
  countdownEl.style.fontSize = 50;
}

function restartCountdown() {
  stopCountdown();
  startingMinutes = InputEl.value;
  startingMinutes = parseInt(startingMinutes);

  if (startingMinutes != startingMinutes) {
    startingMinutes = 10;
  }

  time = startingMinutes * 60;
  updateCountdown();
}

function updateCountdown() {
  let seconds = time % 60;
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor(time / 3600);

  console.log(hours + ":" + minutes + ":" + seconds + "  time: " + time);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;

  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    countdownEl.innerHTML = finishMessage;
  } else {
    time--;
    sendNotification = false;
  }
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
  countdownEl.style.fontSize = this.value + "px";
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

updateFinishMessageInterval = setInterval(updateFinishMessage, 10);

function updateFinishMessage() {
  finishMessage = FinishInputEl.value;
  if (finishMessage == "") {
    finishMessage = "Time is up!";
  }
}

updateTimeBarInterval = setInterval(updateTimeBar, 1);

function updateTimeBar() {
  let width = 100 / (60 / ((time % 60) + 1));
  if (width > 100) {
    clearInterval(updateTimeBarInterval);
  } else if (width == 1.6666666666666667) {
    width = 0;
  } else {
    timeBarEl.style.width = width + "%";
  }
  console.log(width);
}
