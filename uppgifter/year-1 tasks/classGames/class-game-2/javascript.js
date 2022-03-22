let startTime = null;
let timeDisplay = document.getElementById("time-display");

let resetButton = document.getElementById("reset-button");

document.body.style.background = 'red';

const delay = 3000 + 4000 * Math.random();
setTimeout(onTimeout, delay);

window.addEventListener('pointerdown', onWindowClicked);

function onTimeout() {

    document.body.style.background = 'lime';
    startTime = new Date();

}

function onWindowClicked() {

    endTime = new Date();
    deltaTime = endTime.getTime() - startTime.getTime();
    timeDisplay.innerHTML = deltaTime;
    resetButton.style.display = block;
    
}