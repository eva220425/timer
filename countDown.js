
document.addEventListener("DOMContentLoaded", function() { 
    const selectedFont = localStorage.getItem('selectedFont');
    const selectedColor = localStorage.getItem('selectedColor');
    const brightness = localStorage.getItem('brightness');
    const isDarkroom = localStorage.getItem('isDarkroom') === 'true';
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");
    const countDownButton = document.querySelector(".button-top-right");
    const resetButton = document.querySelector(".button-bottom-right");
    const timerButton = document.querySelector(".button-top-left");
    const settingButton = document.querySelector(".button-bottom-left");
    const increaseButtons = [
        document.querySelector(".increase-countdown0"),
        document.querySelector(".increase-countdown1"),
        document.querySelector(".increase-countdown2"),
        document.querySelector(".increase-countdown3")
    ];
    const decreaseButtons = [
        document.querySelector(".decrease-countdown0"),
        document.querySelector(".decrease-countdown1"),
        document.querySelector(".decrease-countdown2"),
        document.querySelector(".decrease-countdown3")
    ];

    document.body.style.filter = `brightness(${brightness}%)`;

    document.querySelectorAll('.timeText').forEach(function(text) {
        text.style.fontFamily = selectedFont;
        text.style.color = selectedColor;
    });
    
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
    
    var increaseButton0 = document.querySelector(".increase-countdown0");
    var decreaseButton0 = document.querySelector(".decrease-countdown0");
    var countdownElement0 = document.getElementById("countdown0");
    var increaseButton1 = document.querySelector(".increase-countdown1");
    var decreaseButton1 = document.querySelector(".decrease-countdown1");
    var countdownElement1 = document.getElementById("countdown1");
    var increaseButton2 = document.querySelector(".increase-countdown2");
    var decreaseButton2 = document.querySelector(".decrease-countdown2");
    var countdownElement2 = document.getElementById("countdown2");
    var increaseButton3  = document.querySelector(".increase-countdown3");
    var decreaseButton3  = document.querySelector(".decrease-countdown3");
    var countdownElement3 = document.getElementById("countdown3");

    let countdownValue0 = 0;
    let countdownValue1 = 0;
    let countdownValue2 = 0;
    let countdownValue3 = 0;
    var tenMinute = 0;
    var minute = 0;
    var tenSecond = 0;
    var second = 0;
    var countdownText0;
    var countdownText1;
    var countdownText2;
    var countdownText3;

    function updateCountdownText() {
        countdownText0.textContent = formatCountdown(countdownValue0);
        countdownText1.textContent = formatCountdown(countdownValue1);
        countdownText2.textContent = formatCountdown(countdownValue2);
        countdownText3.textContent = formatCountdown(countdownValue3);
    }

    function formatCountdown(value) {
        const minutes = Math.floor(value / 60).toString().padStart(2, "0");
        const seconds = (value % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    increaseButton0.addEventListener("click", function() {
        tenMinute++;
        if (tenMinute > 9) {
            tenMinute = 0;
        }
        countdownElement0.textContent = tenMinute;
    });
    decreaseButton0.addEventListener("click", function() {
        tenMinute--;
        if (tenMinute < 0) {
            tenMinute = 9;
        }
        countdownElement0.textContent = tenMinute;
    });
    increaseButton1.addEventListener("click", function() {
        minute++;
        if (minute > 9) {
            minute = 0;
        }
        countdownElement1.textContent = minute;
    });
    decreaseButton1.addEventListener("click", function() {
        minute--;
        if (minute < 0) {
            minute = 9;
        }
        countdownElement1.textContent = minute;
    });
    increaseButton2.addEventListener("click", function() {
        tenSecond++;
        if (tenSecond > 9) {
            tenSecond = 0;
        }
        countdownElement2.textContent = tenSecond;
    });
    decreaseButton2.addEventListener("click", function() {
        tenSecond--;
        if (tenSecond < 0) {
            tenSecond = 9;
        }
        countdownElement2.textContent = tenSecond;
    });
    increaseButton3.addEventListener("click", function() {
        second++;
        if (second > 9) {
            second = 0;
        }
        countdownElement3.textContent = second;
    });
    decreaseButton3.addEventListener("click", function() {
        second--;

        if (second < 0) {
            second = 9;
        }

        countdownElement3.textContent = second;
    });

    increaseButton3.addEventListener("click", function () {
        countdownValue3 += 1;
        if (countdownValue3 > 9) {
            countdownValue3 = 0;
            countdownValue2 += 1;
            if (countdownValue2 > 5) {
                countdownValue2 = 0;
                countdownValue1 += 1;
                if (countdownValue1 > 9) {
                    countdownValue1 = 0;
                    countdownValue0 += 1;
                }
            }
        }
        updateCountdownText();
    });

    decreaseButton3.addEventListener("click", function () {
        if (countdownValue3 > 0) {
            countdownValue3 -= 1;
        } else {
            if (countdownValue2 > 0) {
                countdownValue2 -= 1;
                countdownValue3 = 9;
            } else {
                if (countdownValue1 > 0) {
                    countdownValue1 -= 1;
                    countdownValue2 = 5;
                    countdownValue3 = 9;
                } else {
                    if (countdownValue0 > 0) {
                        countdownValue0 -= 1;
                        countdownValue1 = 9;
                        countdownValue2 = 5;
                        countdownValue3 = 9;
                    }
                }
            }
        }
        updateCountdownText();
    });

    var isCountingDown = false;
    var countdownInterval;
    var isCountingUp = false;


    playButton.addEventListener("click", function() {
        if (isCountingDown) {
            clearInterval(countdownInterval);
            isCountingDown = false;
    
            resetButton.style.display = 'block';
            countDownButton.style.display = 'block';
            timerButton.style.display = 'block';
            settingButton.style.display = 'block';
            increaseButtons.forEach(function(button) {
                button.style.display = 'block';
            });
            decreaseButtons.forEach(function(button) {
                button.style.display = 'block';
            });

        } else if (isCountingUp) {
            clearInterval(countupInterval);
            isCountingUp = false;
    
            resetButton.style.display = 'none';
            countDownButton.style.display = 'none';
            timerButton.style.display = 'none';
            settingButton.style.display = 'none';
            increaseButtons.forEach(function(button) {
                button.style.display = 'none';
            });
            decreaseButtons.forEach(function(button) {
                button.style.display = 'none';
            });

        } else {
            isCountingDown = true;
            startCountdown();
    
            resetButton.style.display = 'none';
            countDownButton.style.display = 'none';
            timerButton.style.display = 'none';
            settingButton.style.display = 'none';
            increaseButtons.forEach(function(button) {
                button.style.display = 'none';
            });
            decreaseButtons.forEach(function(button) {
                button.style.display = 'none';
            });
    
        }
    });
        
    function startCountdown() {
        document.querySelectorAll('.timeText').forEach(function(text) {
            text.style.color = selectedColor;
        });
        
        countdownInterval = setInterval(function() {
            second--;
            if (tenSecond > 5) {
                tenSecond = tenSecond-6;
                minute = minute+1;
            }
            if (minute > 9) {
                minute = 0;
                tenMinute = tenMinute+1;
            }

            if (second < 0) {
                second = 9;
                tenSecond--;

                if (tenSecond < 0) {
                    tenSecond = 5;
                    minute--;

                    if (minute < 0) {
                        minute = 9;
                        tenMinute--;

                        if (tenMinute < 0) {
                            clearInterval(countdownInterval);
                            isCountingDown = false;
                        }
                    }
                }
            }

            countdownElement0.textContent = tenMinute;
            countdownElement1.textContent = minute;
            countdownElement2.textContent = tenSecond;
            countdownElement3.textContent = second;

            if (tenMinute === 0 && minute === 0 && tenSecond === 0 && second === 0) {
                clearInterval(countdownInterval);
                isCountingDown = false;
                isCountingUp = true;
                startCountup();
            }
        }, 1000);
    }

    var countupInterval;
    function startCountup() {
        countupInterval = setInterval(function() {
            second++;

            if (second > 9) {
                second = 0;
                tenSecond++;

                if (tenSecond > 5) {
                    tenSecond = 0;
                    minute++;
                    second++;

                    if (second > 9) {
                        second = 0;
                        tenSecond = 0;
                        minute++;
                    }
                }
            }

            countdownElement0.textContent = tenMinute;
            countdownElement1.textContent = minute;
            countdownElement2.textContent = tenSecond;
            countdownElement3.textContent = second;
        }, 1000);
    }

    resetButton.addEventListener("click", function(event) {
        event.preventDefault();

        countdownValue0 = 0;
        countdownValue1 = 0;
        countdownValue2 = 0;
        countdownValue3 = 0;
        tenMinute = 0;
        minute = 0;
        tenSecond = 0;
        second = 0;

        countdownElement0.textContent = tenMinute;
        countdownElement1.textContent = minute;
        countdownElement2.textContent = tenSecond;
        countdownElement3.textContent = second;

    });
});