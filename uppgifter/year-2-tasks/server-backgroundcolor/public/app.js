//Getting container element from html
const containerElement = document.getElementById("container");
//Getting buttons from html
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");

redButton.addEventListener("click", onBackgroundButtonPressed);
greenButton.addEventListener("click", onBackgroundButtonPressed);
blueButton.addEventListener("click", onBackgroundButtonPressed);

onWebsiteLoad();

function onWebsiteLoad() {
    //getting backgroundcolor from server.
    fetch("/backgroundcolor")
    .then(response => response.json())
    .then((data) => {
        //applying background to container element.
        containerElement.style.backgroundColor = data.color;
    });
}

function onBackgroundButtonPressed(e) {
    //Making data objekt.
    let data = {}
    //Seeing what button u press on and putting the repersenting color in the data objekt.
    if (e.target.id == "red-button") {
        containerElement.style.backgroundColor = "red";
        data = {backgroundColor: "red",}
    } else if (e.target.id == "green-button") {
        containerElement.style.backgroundColor = "green";
        data = {backgroundColor: "green",}
    } else if (e.target.id == "blue-button") {
        containerElement.style.backgroundColor = "blue";
        data = {backgroundColor: "blue",}
    }
    //Sending backgound color to sendBackgroundColortoServer function.
    sendBackgroundColortoServer(data)
}

function sendBackgroundColortoServer(data) {
    //Posting background color to server.
    fetch("/backgroundcolor", {
        method: "post",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}