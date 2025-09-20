       let hour = 0;
        let minute = 0;
        let second = 0;
        let millisecond = 0;

        let cron;

        
        document.getElementById('start').onclick = () => start(), playSound();
        document.getElementById('reset').onclick = () => reset();
        document.getElementById('stop').onclick = () => stop();


        function start() {
            stop()
            cron = setInterval(() => { timer(); }, 10);
            playSound();
        }

        function stop() {
            clearInterval(cron);
            playSound();
        }

        function reset() {
            hour = 0;
            minute = 0;
            second = 0;
            millisecond = 0;
            document.getElementById('hour').innerHTML = '00';
            document.getElementById('minute').innerHTML = '00';
            document.getElementById('second').innerHTML = '00';
            document.getElementById('millisecond').innerHTML = '00';
        }


        function timer() {
            if ((millisecond += 10) == 1000) {
                millisecond = 0;
                second++;
            }
            if (second == 60) {
                second = 0;
                minute++;
            }
            if (minute == 60) {
                minute = 0;
                hour++;
            }
            document.getElementById('hour').innerText = returnData(hour);
            document.getElementById('minute').innerText = returnData(minute);
            document.getElementById('second').innerText = returnData(second);
            document.getElementById('millisecond').innerText = returnData(millisecond);
        }

        function returnData(input) {
            return input >= 10 ? input : `0${input}`
        }

        function playSound() {
            let audio = document.getElementById("sound-effect");
            audio.currentTime = 0; // garante que começa do início
            audio.play()
                .catch(err => console.log("Som bloqueado pelo navegador:", err));
        }
