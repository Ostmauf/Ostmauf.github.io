
//Variabler
let sum;
let num1 = document.getElementById("num-1");
let num2 = document.getElementById("num-2");

let sumHolder = document.getElementById("sum-holder");
//Buttons
let buttonForPlus = document.getElementById("button-for-plus");
let buttonForMinus = document.getElementById("button-for-minus");
let buttonForMultiply = document.getElementById("button-for-multiply");
let buttonForDivided = document.getElementById("button-for-divided");

//eventlistener for buttons
buttonForPlus.addEventListener("click", calPlus);
buttonForMinus.addEventListener("click", calMinus);
buttonForMultiply.addEventListener("click", calMultiply);
buttonForDivided.addEventListener("click", calDivided);

//Funktions
function calPlus() {

    sum = parseFloat(num1.value) + parseFloat(num2.value);
    sum = sum
    sumHolder.innerHTML = sum;

}

function calMinus() {

    sum = parseFloat(num1.value) - parseFloat(num2.value);
    sumHolder.innerHTML = sum;

}

function calMultiply() {

    sum = parseFloat(num1.value) * parseFloat(num2.value);
    sumHolder.innerHTML = sum;

}

function calDivided() {

    sum = parseFloat(num1.value) / parseFloat(num2.value);
    sumHolder.innerHTML = sum;

}