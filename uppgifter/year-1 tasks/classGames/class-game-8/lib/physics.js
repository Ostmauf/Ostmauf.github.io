export function moveCollideX(xDistance, pawn, collisionObjects, collisionCallback) {
  pawn.x += xDistance;
  for(let i = 0; i < collisionObjects.length; i++) {
    if(rectOverlaps(pawn, collisionObjects[i])) {
      
      if(collisionCallback) {
        if(collisionCallback(pawn, collisionObjects[i]) === false) {
          continue;
        }
      }

      const collisionOffset = pawn.x + pawn.width / 2 < collisionObjects[i].x + collisionObjects[i].width / 2
        ? pawn.x + pawn.width - collisionObjects[i].x
        : pawn.x - (collisionObjects[i].x + collisionObjects[i].width)
      pawn.x -= collisionOffset;
    }
  }
}

export function moveCollideY(yDistance, pawn, collisionObjects, collisionCallback) {
  pawn.y += yDistance;
  for(let i = 0; i < collisionObjects.length; i++) {
    if(rectOverlaps(pawn, collisionObjects[i])) {

      if(collisionCallback) {
        if(collisionCallback(pawn, collisionObjects[i]) === false) {
          continue;
        }
      }

      const collisionOffset = pawn.y + pawn.height / 2 < collisionObjects[i].y + collisionObjects[i].height / 2
        ? pawn.y + pawn.height - collisionObjects[i].y
        : pawn.y - (collisionObjects[i].y + collisionObjects[i].height)
      pawn.y -= collisionOffset;
    }
  }
}

function rectOverlaps(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}