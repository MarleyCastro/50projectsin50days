document.addEventListener('DOMContentLoaded', () => {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12; 
        const secondDegrees = seconds * 6;
        const minuteDegrees = minutes * 6 + seconds * 0.1;
        const hourDegrees = hours * 30 + minutes * 0.5;

        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
});