//Adding the canvas element to the variable canvas.
const canvas = document.querySelector('#canvas');

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

//Making the canvas size.
canvas.width  = 800;
canvas.height = 600;

let mouseX, mouseY;

const blueCircle = {
  x: 250,
  y: 300,
  radius: 80,
  color: 'blue',
  fill: false,
  velocityX: 30,
  velocityY: 30,
};

const redCircle = {
  x: 550,
  y: 300,
  radius: 80,
  color: 'red',
  fill: false,
  velocityX: 30,
  velocityY: 30,
};

canvas.addEventListener('mousemove', onCanvasMouseMove);

update();

function update() {
    window.requestAnimationFrame(update);
    
    blueCircle.fill = isPointInCircle(mouseX, mouseY, blueCircle.x, blueCircle.y, blueCircle.radius);
    redCircle.fill = isPointInCircle(mouseX, mouseY, redCircle.x, redCircle.y, redCircle.radius);
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    //Drawing circles.
    drawCircle(blueCircle);
    drawCircle(redCircle);
    //Checking if circles touch with the canvas and makes them bouns the other way.
    onCircleCollision(blueCircle);
    onCircleCollision(redCircle);

}

function drawCircle(circle) {
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
  context.lineWidth = 4;
  context.strokeStyle = circle.color;
  context.stroke();

  if(circle.fill) {
    context.fillStyle = circle.color;
    context.fill();
  }
}

function onCanvasMouseMove(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
}

function isPointInCircle(pointX, pointY, circleX, circleY, circleRadius) {
  const dx = pointX - circleX;
  const dy = pointY - circleY;
  return Math.sqrt(dx*dx + dy*dy) <= circleRadius;
}

function onCircleCollision(circle) {
    //For circle collision with right and left wall.
    circle.x += circle.velocityX
    
    if (circle.x >= canvas.width - circle.radius) {
        circle.velocityX = -circle.velocityX;
    } else if (circle.x <= 0 + circle.radius) {
        circle.velocityX = Math.abs(circle.velocityX);
    } 
    //For circle collision with top and bottom wall.
    circle.y += circle.velocityY

    if (circle.y >= canvas.height - circle.radius) {
        circle.velocityY = -circle.velocityY;
    } else if (circle.y <= 0 + circle.radius) {
        circle.velocityY = Math.abs(circle.velocityY);
    }
}