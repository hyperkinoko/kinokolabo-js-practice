let canvas;
let context;
let timerId;

const BORDER_COLOR = '#9c9c9c';
const CELL_SIZE = 20;
const GAME_AREA_COL_MAX = 9;
const GAME_AREA_ROW_MAX = 19;

let posX = 5;
let posY = 0;
let direction = Math.floor(Math.random() * 4);
let blockType = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
let speed = 1000;

window.onload = () => {
  canvas = document.getElementById('canvas');
  canvas.width = (GAME_AREA_COL_MAX + 1) * CELL_SIZE;
  canvas.height = (GAME_AREA_ROW_MAX + 1) * CELL_SIZE;
  context = canvas.getContext('2d');

  document.addEventListener('keydown', event => {
    switch (event.code) {
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft();
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight();
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveDown();
        break;
      case 'KeyE':
      case 'KeyX':
        rotateClockwise();
        break;
      case 'KeyQ':
      case 'KeyZ':
        rotateCounterClockwise();
        break;
    }
  });

  drawBlock(posX, posY, direction, blockType);
  timerId = setInterval(moveDown, 1000);
};

function moveRight() {
  if(canMoveTo(posX + 1, posY, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX++;
    drawBlock(posX, posY, direction, blockType);
  }
}

function moveLeft() {
  if(canMoveTo(posX - 1, posY, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX--;
    drawBlock(posX, posY, direction, blockType);
  }
}

function moveDown() {
  if(canMoveTo(posX, posY + 1, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posY++;
    drawBlock(posX, posY, direction, blockType);
  } else {
    clearInterval(timerId);
  }
}

function rotateClockwise() {
  let nextDirection = direction + 1;
  if(nextDirection >= 4) {
    nextDirection -= 4;
  }
  if(canMoveTo(posX, posY, nextDirection)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    direction = nextDirection;
    drawBlock(posX, posY, direction, blockType);
  }
}

function rotateCounterClockwise() {
  let nextDirection = direction - 1;
  if(nextDirection < 0) {
    nextDirection += 4;
  }
  if(canMoveTo(posX, posY, nextDirection)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    direction = nextDirection;
    drawBlock(posX, posY, direction, blockType);
  }
}

function canMoveTo(col, row, direction) {
  for(const position of blockType.shape[direction]) {
    if (col + position[0] < 0) {
      return false;
    }
    if (col  + position[0] > GAME_AREA_COL_MAX) {
      return false;
    }
    if (row + position[1] < 0) {
      return false;
    }
    if (row + position[1] > GAME_AREA_ROW_MAX) {
      return false;
    }
  }
  return true;
}

function drawCell(col, row, color) {
  context.fillStyle = color;
  context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  context.lineWidth = 1;
  context.strokeStyle = BORDER_COLOR;
  context.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function drawBlock(col, row, direction, type) {
  for(const position of type.shape[direction]) {
    drawCell(col + position[0], row + position[1], type.color);
  }
}
