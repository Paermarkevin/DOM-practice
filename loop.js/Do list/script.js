let clock = document.getElementById("clock");
let date = document.getElementById("date");

function updateClock() {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  date.innerText = now.toDateString();
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);



let timer = document.getElementById("timer");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Display stopwatch time
function updateTimer() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  timer.innerText =
    `${String(hrs).padStart(2, "0")}:` +
    `${String(mins).padStart(2, "0")}:` +
    `${String(secs).padStart(2, "0")}`;
}

// Start stopwatch
startBtn.addEventListener("click", function () {
  if (interval !== null) return;

  interval = setInterval(function () {
    seconds++;
    updateTimer();
  }, 1000);
});

// Pause stopwatch
pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});

// Reset stopwatch
resetBtn.addEventListener("click", function () {
  clearInterval(interval);

  interval = null;
  seconds = 0;

  updateTimer();
});
