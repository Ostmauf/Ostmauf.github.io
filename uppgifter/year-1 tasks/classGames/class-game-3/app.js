/*VARIABLES---------------------------------------------------------------*/
const startButton = document.getElementById("start-button");
const timeElement = document.getElementById("time");
const stopButton = document.getElementById("stop-button");

let onTickRepeat;
let startTime = null;
/*------------------------------------------------------------------------*/

//Making the stop button invisable
stopButton.style.display = "none";

//Making event listeners to start and stop buttons.
startButton.addEventListener('click', onStart);
stopButton.addEventListener("click", onstop);

/*FUNKTIONS---------------------------------------------------------------*/
//Funktion for the start button.
function onStart() {

    startButton.style.display = "none";
    stopButton.style.display = null;
    startTime = new Date();
    onTickRepeat = setInterval(onTick, 10);

}

//Funktion for the stop button.
function onstop() {

    clearInterval(onTickRepeat);
    startButton.style.display = null;
    stopButton.style.display = "none";

}

//Funktion so the timer moves forward.
function onTick() {

    const now = new Date();
    const elapsedMilliseconds = now.getTime() - startTime.getTime();
    const elapsedSeconds = elapsedMilliseconds / 1000;
    timeElement.innerHTML = elapsedSeconds.toFixed(3);

}
/*------------------------------------------------------------------------*/
