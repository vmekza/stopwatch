"use strict";

const time = document.querySelector(".watch .watch_time");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let counter = 0;
let interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function timer() {
  counter++;

  let hours = Math.floor(counter / 3600);
  let minutes = Math.floor(counter / 60) - hours * 60;
  let seconds = counter % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  time.innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (interval) {
    return;
  } else interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  counter = 0;
  time.innerText = "00:00:00";
}
