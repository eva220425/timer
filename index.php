<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="timer.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cursed+Timer+ULiL">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Fullscreen Timer</title>
    </head>
    <body>
        
        <div id="timer-container">
            <div class="timer-display" id="timerDisplay">
                <?php
                session_start();
                if ($_SESSION['timer_display']==null) $_SESSION['timer_display'] = 'timerDisplay.php';
                if (isset($_POST['switch']) && $_POST['switch'] === 'timer') {
                    $_SESSION['timer_display'] = 'timerDisplay.php';
                } elseif (isset($_POST['switch']) && $_POST['switch'] === 'countdown') {
                    $_SESSION['timer_display'] = 'countDown.php';
                }

                include $_SESSION['timer_display'];
                ?>
            </div>
            <div class="buttons" id="timerUI">
                <form method="POST" action="">
                    <button type="submit" class="button button-top-left" name="switch" value="timer">
                        <span class="material-symbols-outlined" alt="Timer">timer</span>
                    </button>
                    <button type="submit" class="button button-top-right" name="switch" value="countdown">
                        <span class="material-symbols-outlined" alt="Countdown">alarm</span>
                    </button>
                </form>
                <a href="timerSetting.php" class="button button-bottom-left">
                    <span class="material-symbols-outlined" alt="Button 3">settings</span>
                </a>
                <a href="#" class="button button-bottom-right">
                    <span class="material-symbols-outlined" alt="Button 4">refresh</span>
                </a>
            </div>
        </div>
        <script src="timerSetting.js"></script>
    </body>
</html>
