//Variables
const rubrik = document.getElementById("rubrik");
const button = document.getElementById("button");

//Eventlisteners
button.addEventListener("click", buttonPressed);

//Funktions
function buttonPressed() {
    rubrik.innerHTML = "Det är roligt att vara tillbaka i skolan";
    button.style.display = "none";
}