const canvas = document.querySelector('#canvas');

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

// Ange storlek på canvas elementet.
canvas.width = 800;
canvas.height = 600;

// Lägg till en mousemove eventlistener på canvas för att 
// få information om musen.
canvas.addEventListener('mousemove', onMouseMove);

// Större cirkelns variabler
let bigCircleX = 400;
let bigCircleY = 300;
let bigCircleRadius = 200;

// Bollens koordinater och information
let ballX = 400;
let ballY = 300;
let ballRadius = 30;

// Information om musen
let mouseX = 0;
let mouseY = 0;

// Starta animations loopen
update();

// Funktion som uppdaterar och ritar ut animationen.
function update() {
  // Vänta på nästa gång skärmen refreshar och kör samma funktion igen.
  window.requestAnimationFrame(update);

  // Räkna ut distance från bigCircle till ball
  let dx = mouseX - bigCircleX;
  let dy = mouseY - bigCircleY;
  let distance = Math.sqrt(dx*dx + dy*dy);
  
  // Normalisera dx och dy (direction)
  let directionX = dx / distance;
  let directionY = dy / distance;

  // Räkna ut bollens position
  ballX = bigCircleX + directionX * Math.min(distance, bigCircleRadius-ballRadius);
  ballY = bigCircleY + directionY * Math.min(distance, bigCircleRadius-ballRadius);

  // Rita ut en vit bakgrund för vår canvas.
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Rita ut större cirkeln.
  context.beginPath();
  context.arc(bigCircleX, bigCircleY, bigCircleRadius, 0, Math.PI * 2);

  context.lineWidth = 5;
  context.strokeStyle = 'black';
  context.stroke();

  // Rita ut bollen.
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);

  context.fillStyle = 'cyan';
  context.fill();

  context.lineWidth = 5;
  context.strokeStyle = 'black';
  context.stroke();
}

function onMouseMove(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
}