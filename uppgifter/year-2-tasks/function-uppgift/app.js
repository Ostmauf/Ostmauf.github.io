const answerBoard = document.getElementById("answer-board");
const button = document.getElementById("button");

button.addEventListener("click", () => {location.reload()})

let answer = 0;

let firstNum = parseFloat(prompt("Skriv in första nummret"));
let secundNum = parseFloat(prompt("Skriv in andra nummret"));
    
answer = firstNum + secundNum; 

if (isNaN(answer)) {
    answerBoard.innerHTML = "Du skrev inte ett nummer";
    button.style.display = "block";

} else {
    answerBoard.innerHTML = answer;
}



