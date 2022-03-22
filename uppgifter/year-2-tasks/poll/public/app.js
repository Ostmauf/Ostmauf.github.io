const descriptionElement = document.querySelector(".question > span");
const answersContainer = document.querySelector(".question > .answers");
const resultContainer = document.querySelector(".question > .result");

getQuestion();
setInterval(getQuestion, 1000);

function getQuestion() {
    fetch("http://localhost:3000/question")
    .then(response => response.json())
    .then(data => {
    updateDom(data);
});
}


function updateDom(data) {
    descriptionElement.innerText = data.description;
    answersContainer.innerHTML = "";
    resultContainer.innerHTML = "";
    data.answers.forEach((answer, index) => {
        //Knapp (att svara på)
        const button = document.createElement("button");
        button.innerText = answer;
        answersContainer.append(button);
        button.addEventListener("click", onAnswerClicked);
        // result (för svaret)
        const div = document.createElement("div");
        const percent = (data.result[index] / data.totalResults) * 100;
        div.innerText = answer + ": " + data.result[index] + "(" + percent.toFixed(2) + "%)";
        resultContainer.append(div);
    });
}

function onAnswerClicked(e) {
    answersContainer.parentElement.removeChild(answersContainer);
    fetch("http://localhost:3000/question", {
        method: "post",
        body: JSON.stringify({ answer: e.target.innerText}),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        updateDom(data)
    });
}

