import { getKey, keyCodes } from "./input.js";
import { moveCollideX, moveCollideY } from "./physics.js";
import { platforms } from './platforms.js';

const gravity = 1;
const jumpStrength = -12.4;
const speed = 7.2;

let color = 'lime';

export const playerRect = {
  x: -100,
  y: 760,
  width: 40,
  height: 40
};

let vy = 0;
let grounded = false;

export function updatePlayer() {

  if(grounded && getKey(keyCodes.arrowUp)) {
    vy = jumpStrength;
    grounded = false;
  }

  vy += gravity;

  // Denna kod gör det möjligt att styra playern som i ett platformer spel.
  /*let vx = 0;
  vx += getKey(keyCodes.arrowLeft) ? -5 : 0;
  vx += getKey(keyCodes.arrowRight) ? 5 : 0; */

  // Denna rad gör så att playern rör sig mot höger.
  let vx = speed;

  moveCollideX(vx, playerRect, platforms, onCollideX);
  moveCollideY(vy, playerRect, platforms, onCollideY);

  if(playerRect.y > 450 - playerRect.height) {
    playerRect.y = 450 - playerRect.height;
    vy = 0;
    grounded = true;
  }
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlayer(context, camera) {
  context.fillStyle = color;
  context.fillRect(playerRect.x - camera.x, playerRect.y - camera.y, playerRect.width, playerRect.height);
}

function onCollideX(pawn, collisionObject) {
  playerRect.x = -100;
  playerRect.y = 760;

  return false;
}

function onCollideY(pawn, collisionObject) {
  if(vy >= 0) {
    grounded = true;
  }
  vy = 0;

  return true;
}