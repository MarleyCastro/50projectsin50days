let timerDisplay = document.querySelector('.timeDisplay'); // Fixed class name
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;  // Changed to 0 instead of 00
let secs = 0;
let mins = 0;
let timerId = null;

// Start button functionality
startBtn.addEventListener('click', function() {
    if(timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10); // Runs every 10ms
});

// Stop button functionality
stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

// Reset button functionality
resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = '00 : 00 : 00';
});

// Timer function
function startTimer() {
    msec++;
    if(msec == 100) {  // Fixed condition (was 'sec' instead of 'msec')
        msec = 0;
        secs++;
        if(secs == 60) {
            secs = 0;
            mins++;
        }
    }

    // Format time with leading zeros
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Update display
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}