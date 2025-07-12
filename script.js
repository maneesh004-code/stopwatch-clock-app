// Clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock(); // call once initially

// Stopwatch
let [hours, minutes, seconds] = [0, 0, 0];
let stopwatchDisplay = document.getElementById("stopwatch");
let timer = null;

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  stopwatchDisplay.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (timer !== null) return;
  timer = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  stopStopwatch();
  [hours, minutes, seconds] = [0, 0, 0];
  stopwatchDisplay.textContent = "00:00:00";
}
