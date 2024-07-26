let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = 'Start';
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
});

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
    millisecondsEl.textContent = Math.floor(milliseconds / 10).toString().padStart(2, '0');
}
