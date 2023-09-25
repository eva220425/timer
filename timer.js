document.addEventListener("DOMContentLoaded", function () {
    const timerText = document.getElementById("timer");
    const playButton = document.querySelector(".play-button");
    const resetButton = document.querySelector(".button-bottom-right");
    const refreshButton = document.querySelector(".button-top-left");
    const countDownButton = document.querySelector(".button-top-right");
    const settingButton = document.querySelector(".button-bottom-left");

    const selectedFont = localStorage.getItem('selectedFont');
    document.getElementById('timer').style.fontFamily = selectedFont;

    const selectedColor = localStorage.getItem('selectedColor');
    
    document.getElementById('timer').style.color = selectedColor;

    const brightness = localStorage.getItem('brightness');
    document.body.style.filter = `brightness(${brightness}%)`;
    
    const isDarkroom = localStorage.getItem('isDarkroom') === 'true';

    if (isDarkroom && selectedColor) {
        document.querySelectorAll('.button').forEach(function (span) {
            span.style.color = selectedColor;
        });
        document.querySelector('.play-button').style.color = selectedColor;
    } else {
        document.querySelectorAll('.button').forEach(function (span) {
            span.style.color = 'white';
            document.querySelector('.play-button').style.color = 'white';
        });
    }
    
    let countUpValue = 0;
    let timerInterval;
    
    function updateTimer() {
        const minutes = Math.floor(countUpValue / 60).toString().padStart(2, "0");
        const seconds = (countUpValue % 60).toString().padStart(2, "0");
        timerText.textContent = `${minutes}:${seconds}`;
        countUpValue++;
        
        localStorage.setItem("countUpValue", countUpValue);
    }
    
    function toggleTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            
            resetButton.style.display = 'block';
            refreshButton.style.display = 'block';
            countDownButton.style.display = 'block';
            settingButton.style.display = 'block';
        } else {
            timerInterval = setInterval(updateTimer, 1000);
            
            resetButton.style.display = 'none';
            refreshButton.style.display = 'none';
            countDownButton.style.display = 'none';
            settingButton.style.display = 'none';
        }
    }
    
    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        countUpValue = 0;
        updateTimer();
    }
    
    function refreshTimer(event) {
        event.preventDefault();
        countUpValue = 0;
        updateTimer();
    }

    const storedCount = localStorage.getItem("countUpValue");
    if (storedCount !== null) {
        countUpValue = parseInt(storedCount, 10) - 2;
        updateTimer();
    }

    playButton.addEventListener("click", toggleTimer);
    
    resetButton.addEventListener("click", resetTimer);
    
    refreshButton.addEventListener("click", refreshTimer);
    
    updateTimer();
});
