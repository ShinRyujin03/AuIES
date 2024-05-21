document.addEventListener("DOMContentLoaded", () => {
    const timerButton = document.getElementById("timerButton");
    let timerInterval;

    timerButton.addEventListener("click", () => {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        startTimer(40 * 60, timerButton); // 40 minutes in seconds
    });

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        timerInterval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = `Time: ${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                display.textContent = "Time's up!";
            }
        }, 1000);
    }
});
