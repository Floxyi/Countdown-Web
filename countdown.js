let startingMinutes;
const countdownEl = document.getElementById("countdown");
const InputEl = document.getElementById("Input");
const settingsEl = document.getElementById("settings");
settingsElisHidden = true;
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

function startCountdown() {
  if (hasTime == false || InputEl.value != startingMinutes) {
    hasTime = true;
    startingMinutes = InputEl.value;
    startingMinutes = parseFloat(startingMinutes);

    if (startingMinutes != startingMinutes) {
      startingMinutes = 10;
      document.InputEl.value = startingMinutes;
    }

    time = startingMinutes * 60;
    console.log(startingMinutes);
  }

  if (isStarted == false) {
    isStarted = true;
    countdownEl.style.color = "#000000";
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
  console.log(countdownEl.style.fontSize);
}

function restartCountdown() {
  startingMinutes = InputEl.value;
  startingMinutes = parseInt(startingMinutes);

  if (startingMinutes != startingMinutes) {
    startingMinutes = 10;
  }

  time = startingMinutes * 60;
  stopCountdown();
  updateCountdown();
}

function updateCountdown() {
  console.log(time);
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
    countdownEl.innerHTML = `Time is up!`;
  } else {
    time--;
    sendNotification = false;
  }
}

function manageSettings() {
  if (settingsElisHidden == true) {
    settingsEl.style.opacity = 100;
    blendEl.style.opacity = "30%";
    blendEl.style.pointerEvents = "all";
    settingsElisHidden = false;
  } else if (settingsElisHidden == false) {
    settingsElisHidden = true;
    settingsEl.style.opacity = 0;
    blendEl.style.opacity = 0;
    blendEl.style.pointerEvents = "none";
  }
}

sliderTextSeizeEl.oninput = function () {
  textSeizeValueEl.innerHTML = this.value;
  countdownEl.style.fontSize = this.value + "px";
};

updateHeadlineInterval = setInterval(updateHeadline, 1);

function updateHeadline() {
  headline = HeadlineInputEl.value;
  if (headline == headline) {
    headlineEl.innerHTML = headline;
  }
  if (headline == "") {
    headlineEl.innerHTML = "🕓 Countdown 🕗";
  }
}
