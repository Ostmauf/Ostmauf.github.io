
//Button Variables
let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");

//Eventlistener
plusButton.addEventListener("click", plusCounter);
minusButton.addEventListener("click", minusCounter);

//Other Variables
let mainText = document.getElementById("main-text");
let counterNumber = 0;

//Arrays
let colors = ["white", "yellow", "orange", "red", "purple", "blue", "black"]

//Funktions
function plusCounter() {

    counterNumber++;

    if (counterNumber >= 7) {

        counterNumber = 0;

    }

    mainText.innerHTML = counterNumber;
    document.body.style.backgroundColor = colors[counterNumber];

}

function minusCounter() {

    counterNumber--;

    if (counterNumber < 0) {

        counterNumber = colors.length - 1;

    }

    mainText.innerHTML = counterNumber;
    document.body.style.backgroundColor = colors[counterNumber];

}