const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");

if (localStorage.getItem("backgroundColor") == null) {
    localStorage.setItem("backgroundColor", "white");
} else {
    checkBackgroundColor()
}

button1.addEventListener("click", () => {
    localStorage.setItem("backgroundColor", "red");
    checkBackgroundColor();
});

button2.addEventListener("click", () => {
    localStorage.setItem("backgroundColor", "green");
    checkBackgroundColor();
});

button3.addEventListener("click", () => {
    localStorage.setItem("backgroundColor", "blue");
    checkBackgroundColor();
});

button4.addEventListener("click", () => {
    localStorage.setItem("backgroundColor", "black");
    checkBackgroundColor();
});

button5.addEventListener("click", () => {
    localStorage.setItem("backgroundColor", "white");
    checkBackgroundColor();
});

function checkBackgroundColor() {
    if (localStorage.getItem("backgroundColor") == "red") {
        document.body.style.backgroundColor = "red";
    }

    if (localStorage.getItem("backgroundColor") == "green") {
        document.body.style.backgroundColor = "green";
    }

    if (localStorage.getItem("backgroundColor") == "blue") {
        document.body.style.backgroundColor = "blue";
    }

    if (localStorage.getItem("backgroundColor") == "black") {
        document.body.style.backgroundColor = "black";
    }

    if (localStorage.getItem("backgroundColor") == "white") {
        document.body.style.backgroundColor = "white";
    }
}