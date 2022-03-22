const canvas = document.querySelector("#canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let x = 0;
let y = 300;
let circleRadius = 30;
let xspeed = 5;
let yspeed = 5;


//start animations loppen
update();

//funktion som upptaterar och ritar ut animatioen
function update() {
    window.requestAnimationFrame(update);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (x > canvas.width -30) {
        xspeed *= -1;
        x = canvas.width -30;
    } else if (x < circleRadius) {
    xspeed*= -1;
    x = 30;
    }
    x += xspeed

    if (y > canvas.height -30) {
        yspeed *= -1;
        y = canvas.height -30;
    } else if (y < circleRadius) {
        yspeed*= -1;
        y = 30;
    }
    y += yspeed

    //rita ut cirkel
    context.beginPath();
    context.arc(x, y, circleRadius, 0, 6.3);

    context.fillStyle = "cyan";
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}