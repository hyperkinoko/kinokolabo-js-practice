let canvas;
let context;
let timerId;

const BORDER_COLOR = '#9c9c9c';
const CELL_SIZE = 20;
const GAME_AREA_COL_MAX = 9;
const GAME_AREA_ROW_MAX = 19;

let posX = 5;
let posY = 0;
let direction = 0;
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

  drawBlock(posX, posY, direction, BLOCK_T);
  timerId = setInterval(moveDown, 1000);
};

function moveRight() {
  if(canMoveTo(posX + 1, posY, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX++;
    drawBlock(posX, posY, direction, BLOCK_T);
  }
}

function moveLeft() {
  if(canMoveTo(posX - 1, posY, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX--;
    drawBlock(posX, posY, direction, BLOCK_T);
  }
}

function moveDown() {
  if(canMoveTo(posX, posY + 1, direction)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posY++;
    drawBlock(posX, posY, direction, BLOCK_T);
  } else {
    clearInterval(timerId);
  }
}

function rotateClockwise() {
  if(canMoveTo(posX, posY, (direction + 1) % 4)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    direction = (direction + 1) % 4;
    drawBlock(posX, posY, direction, BLOCK_T);
  }
}

function rotateCounterClockwise() {
  if(canMoveTo(posX, posY, (direction + 3) % 4)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    direction = (direction + 3) % 4;
    drawBlock(posX, posY, direction, BLOCK_T);
  }
}

function canMoveTo(col, row, direction) {
  for(const position of BLOCK_T.shape[direction]) {
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

const BLOCK_T = {
  color: '#63c9ff',
  shape: [
    [[-1, 0], [0, 0], [1, 0], [0, 1]],
    [[-1, 0], [0, 0], [0, -1], [0, 1]],
    [[-1, 0], [0, 0], [1, 0], [0, -1]],
    [[0, -1], [0, 0], [0, 1], [1, 0]],
  ]
}
