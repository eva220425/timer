<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="timerSetting.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cursed+Timer+ULiL">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Fullscreen Timer</title>
    </head>
    <body>
        <div class="timer-text">
            
            <div class="time-container">
                <div class="font-select" id="time-container-1">02:34</div>
                <div class="font-select" id="time-container-2">02:34</div>
            </div>
            <div class="circle-group">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
                <div class="circle circle5"></div>
            </div>
            <div class="luminance">
                <input type="range" id="brightness-slider" min="0" max="100" value="100">
            </div>
            <div class="darkroom" id="darkroom-text">
                <p>Darkroom: <input type="checkbox" id="darkroom-checkbox"></p>
            </div>
            <div class="cancel-save">
                <button id="cancelButton">Cancel</button>  
                <a href="index.php" id="saveButton">Save</a>  
            </div>
           
        </div>
        <script src="timerSetting.js"></script>
    </body>
</html>
