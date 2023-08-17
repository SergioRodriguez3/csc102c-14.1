// script.js - Created by [Sergio Rodriguez]

// Function to move the meme image around the page
function moveMeme() {
    var meme = document.querySelector('img');
    var posX = 0;
    var posY = 0;
    var directionX = 1;
    var directionY = 1;
    interval = setInterval(function() {
        meme.style.left = posX + 'px';
        meme.style.top = posY + 'px';
        posX += 5 * directionX;
        posY += 5 * directionY;

        // Reverse direction if meme reaches the edge of the page
        if (posX >= (window.innerWidth - meme.width) || posX <= 0) {
            directionX *= -1;
        }
        if (posY >= (window.innerHeight - meme.height) || posY <= 0) {
            directionY *= -1;
        }
    }, 50);
}

// Function to stop the meme image from moving
function stopMeme() {
    clearInterval(interval);
}

// Function to enable the Start button and disable the Stop button
function enableStartButton() {
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to enable the Stop button and disable the Start button
function enableStopButton() {
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Add event listeners to the buttons
document.getElementById('startButton').addEventListener('click', function() {
    moveMeme();
    enableStopButton();
});

document.getElementById('stopButton').addEventListener('click', function() {
    stopMeme();
    enableStartButton();
});

// Validation and string manipulation
document.getElementById('validateButton').addEventListener('click', function() {
    var inputElement = document.getElementById('validationInput');
    var inputValue = inputElement.value;
    
    if (isNaN(inputValue)) {
        document.getElementById('validationResult').textContent = "Invalid input. Please enter a number.";
    } else {
        var number = parseFloat(inputValue);
        var result = "The square of " + number + " is " + (number * number);
        document.getElementById('validationResult').textContent = result;
    }
});
