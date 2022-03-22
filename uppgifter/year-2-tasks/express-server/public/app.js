const clientElements = {
    counter: document.querySelector("#client-counter > span"),
    button: document.querySelector("#client-counter > button"),
};

const serverElements = {
  counter: document.querySelector("#server-counter > span"),
  button: document.querySelector("#server-counter > button")
}

clientElements.button.addEventListener("click", onClientCounterClicked);
serverElements.button.addEventListener("click", onServerCounterClicked);

let clientCounter = 0;

fetch("http://localhost:3000/counter")
.then(response => response.json())
.then(data => {
  serverElements.counter.innerText = data.counter;
});

function onClientCounterClicked() {
  clientCounter++;
  clientElements.counter.innerText = clientCounter;
}

function onServerCounterClicked() {
  fetch("http://localhost:3000/counter", {
    method: "post"
  }).then(response => response.json())
  .then(data => {
    serverElements.counter.innerText = data.counter;
  })
}