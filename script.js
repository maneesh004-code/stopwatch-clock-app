// Real-time Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("currentTime").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch Functionality
let stopwatchInterval;
let elapsedTime = 0;
let running = false;

function updateStopwatch() {
  const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsedTime % 60).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (!running) {
    running = true;
    stopwatchInterval = setInterval(() => {
      elapsedTime++;
      updateStopwatch();
    }, 1000);
  }
}

function stopStopwatch() {
  running = false;
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateStopwatch();
}

updateStopwatch();
