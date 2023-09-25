document.addEventListener("DOMContentLoaded", function () {
        const selectedLuminance = localStorage.getItem('brightness');
    const selectedFont = localStorage.getItem('selectedFont');
    const selectedColor = localStorage.getItem('selectedColor');
    const isDarkroom = localStorage.getItem('isDarkroom') === 'true';

    const circles = document.querySelectorAll('.circle');
    const fontSelectDivs = document.querySelectorAll('.font-select');
    const darkroomText = document.getElementById('darkroom-text');
    const darkroomCheckbox = document.getElementById('darkroom-checkbox');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');

    if (selectedColor) {
        circles.forEach(function(circle) {
            if (window.getComputedStyle(circle, null).getPropertyValue('background-color') === selectedColor) {
                circle.classList.add('selected');
            }
        });

        fontSelectDivs.forEach(function (div) {
            div.style.color = selectedColor;
        });

        darkroomCheckbox.checked = isDarkroom;

        if (isDarkroom) {
            darkroomText.style.color = selectedColor;
            saveButton.style.color = selectedColor;
            cancelButton.style.color = selectedColor;
        } else {
            darkroomText.style.color = 'white';
            saveButton.style.color = 'white';
            cancelButton.style.color = 'white';
        }

        if (selectedLuminance) {
            document.body.style.filter = `brightness(${selectedLuminance}%)`;
        }
    }

    const initialFont = selectedFont;
    const initialColor = selectedColor;
    const initialBrightness = selectedLuminance;
    const initialDarkroom = isDarkroom;
    const brightnessSlider = document.getElementById("brightness-slider");
    let previousBrightnessValue = localStorage.getItem('brightness') || 100;

    brightnessSlider.value = previousBrightnessValue;

    brightnessSlider.addEventListener("input", function () {
        const brightnessValue = this.value;
        luminance.style.filter = `brightness(${brightnessValue}%)`;
        document.body.style.filter = `brightness(${brightnessValue}%)`;
        sessionStorage.setItem('brightness', brightnessValue);
    });

    cancelButton.addEventListener('click', function() {
        document.querySelectorAll('.font-select').forEach(function (div) {
            div.style.color = initialColor;
        });
        brightnessSlider.value = previousBrightnessValue;
        document.getElementById('darkroom-checkbox').checked = initialDarkroom;

        if (initialDarkroom) {
            darkroomText.style.color = initialColor;
            saveButton.style.color = initialColor;
            cancelButton.style.color = initialColor;
        } else {
            darkroomText.style.color = 'white';
            saveButton.style.color = 'white';
            cancelButton.style.color = 'white';
        }

        document.body.style.filter = `brightness(${initialBrightness}%)`;

        circles.forEach(function(circle) {
            if (window.getComputedStyle(circle, null).getPropertyValue('background-color') === initialColor) {
                circle.classList.add('selected');
            } else {
                circle.classList.remove('selected');
            }
        });

        fontSelectDivs.forEach(function(div) {
            if (window.getComputedStyle(div, null).getPropertyValue('font-family') === initialFont) {
                div.classList.add('white-border');
            } else {
                div.classList.remove('white-border');
            }
        });

        localStorage.setItem('selectedFont', initialFont);
        localStorage.setItem('selectedColor', initialColor);
        localStorage.setItem('brightness', initialBrightness);
        localStorage.setItem('isDarkroom', initialDarkroom ? 'true' : 'false');
    });
    const sourcePage = sessionStorage.getItem('sourcePage');
    console.log('sourcePage:'+sourcePage);
    if (sourcePage === 'timer') {
        saveButton.href = 'index.php?switch=timer';
    } else if (sourcePage === 'countdown') {
        saveButton.href = 'index.php?switch=countdown';
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    
    const selectedFont = localStorage.getItem('selectedFont');
    const selectedColor = localStorage.getItem('selectedColor');
    const brightness = localStorage.getItem('brightness');
    const isDarkroom = localStorage.getItem('isDarkroom') === 'true';
    
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('selectedColor', selectedColor);
    localStorage.setItem('brightness', brightness);
    localStorage.setItem('isDarkroom', isDarkroom);
});

document.getElementById('darkroom-checkbox').addEventListener('change', function() {
    const selectedColor = localStorage.getItem('selectedColor');
    const darkroomText = document.getElementById('darkroom-text');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    
    if (this.checked) {
        darkroomText.style.color = selectedColor;
        saveButton.style.color = selectedColor;
        cancelButton.style.color = selectedColor;
        localStorage.setItem('isDarkroom', 'true');
    } else {
        darkroomText.style.color = 'white';
        saveButton.style.color = 'white';
        cancelButton.style.color = 'white';
        localStorage.setItem('isDarkroom', 'false');
    }
});

const fontSelectDivs = document.querySelectorAll('.font-select');
const circles = document.querySelectorAll('.circle');

document.addEventListener("DOMContentLoaded", function () {
    const selectedFont = localStorage.getItem('selectedFont');
    const selectedColor = localStorage.getItem('selectedColor');

    document.getElementById('timer-text').style.color = selectedColor;
    document.getElementById('darkroom-text').style.color = selectedColor;
    document.getElementById('cancelButton').style.color = selectedColor;
    document.getElementById('saveButton').style.color = selectedColor;
});

fontSelectDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        fontSelectDivs.forEach(function(otherDiv) {
            otherDiv.classList.remove('white-border');
        });

        div.classList.add('white-border');

        const selectedFont = window.getComputedStyle(div, null).getPropertyValue('font-family');

        localStorage.setItem('selectedFont', selectedFont);
    });
});

circles.forEach(function(circle) {
    circle.addEventListener('click', function() {
        circles.forEach(function(otherCircle) {
            otherCircle.classList.remove('selected');
        });

        circle.classList.add('selected');

        const selectedColor = window.getComputedStyle(circle, null).getPropertyValue('background-color');
        localStorage.setItem('selectedColor', selectedColor);

        const darkroomText = document.getElementById('darkroom-text');
        const darkroomCheckbox = document.getElementById('darkroom-checkbox');
        const cancelButton = document.getElementById('cancelButton');
        const saveButton = document.getElementById('saveButton');

        localStorage.setItem('darkroomCheckbox', darkroomCheckbox.checked);
        
        fontSelectDivs.forEach(function(div) {
            div.style.color = selectedColor;
        });

        const isDarkroom = localStorage.getItem('darkroomCheckbox') === 'true';

        if (darkroomCheckbox.checked) {
            darkroomText.style.color = selectedColor;
            cancelButton.style.color = selectedColor;
            saveButton.style.color = selectedColor;
            localStorage.setItem('isDarkroom', 'true');
        } else {
            darkroomText.style.color = isDarkroom ? selectedColor : 'white';
            cancelButton.style.color = isDarkroom ? selectedColor : 'white';
            saveButton.style.color = isDarkroom ? selectedColor : 'white';
            localStorage.setItem('isDarkroom', 'false');
        }
    });
});

const luminance = document.querySelector(".luminance");
const brightnessSlider = document.getElementById("brightness-slider");

const storedBrightness = localStorage.getItem("brightness") || 100;
brightnessSlider.value = storedBrightness;

luminance.style.filter = `brightness(${storedBrightness}%)`;

brightnessSlider.addEventListener("input", function() {
    const brightnessValue = this.value;
    luminance.style.filter = `brightness(${brightnessValue}%)`;
    document.body.style.filter = `brightness(${brightnessValue}%)`;
    localStorage.setItem('brightness', brightnessValue);
});

function updateStyles(isDarkroom) {
    const selectedColor = localStorage.getItem('selectedColor');
    const buttonSpan = document.querySelector('.button span');

    if (isDarkroom && selectedColor) {
        buttonSpan.style.color = selectedColor;
    } else {
        buttonSpan.style.color = '';
    }
}
