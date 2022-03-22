//Variables
let diceImage1 = document.getElementById("dice-1");
let diceImage2 = document.getElementById("dice-2");
let diceImage3 = document.getElementById("dice-3");
let diceImage4 = document.getElementById("dice-4");
let diceImage5 = document.getElementById("dice-5");
let diceImage6 = document.getElementById("dice-6");

let rollButton = document.getElementById("roll");

//Other
rollButton.addEventListener('click', roll);

//Funktions
function roll() {
  diceImage1.src = "Pics/dice-" + randomInt(1, 6) + ".png";
  diceImage2.src = "Pics/dice-" + randomInt(1, 6) + ".png";
  diceImage3.src = "Pics/dice-" + randomInt(1, 6) + ".png";
  diceImage4.src = "Pics/dice-" + randomInt(1, 6) + ".png";
  diceImage5.src = "Pics/dice-" + randomInt(1, 6) + ".png";
  diceImage6.src = "Pics/dice-" + randomInt(1, 6) + ".png";
}

function randomInt(min, max) {
  return Math.round(min + (max - min) * Math.random());
}
