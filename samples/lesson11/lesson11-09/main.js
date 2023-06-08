let canvas;
let context;
let timerId;

const BORDER_COLOR = '#9c9c9c';
const CELL_SIZE = 20;
const GAME_AREA_COL_MAX = 9;
const GAME_AREA_ROW_MAX = 19;

let posX = 5;
let posY = 0;
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
    }
  });

  drawCell(posX, posY, '#63c9ff');
  timerId = setInterval(moveDown, 1000);
};

function moveRight() {
  if(canMoveTo(posX + 1, posY)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX++;
    drawCell(posX, posY, '#63c9ff');
  }
}

function moveLeft() {
  if(canMoveTo(posX - 1, posY)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posX--;
    drawCell(posX, posY, '#63c9ff');
  }
}

function moveDown() {
  if(canMoveTo(posX, posY + 1)) {
    context.clearRect(0, 0, (GAME_AREA_COL_MAX + 1) * CELL_SIZE, (GAME_AREA_ROW_MAX + 1) * CELL_SIZE);
    posY++;
    drawCell(posX, posY, '#63c9ff');
  } else {
    clearInterval(timerId);
  }
}

function canMoveTo(col, row) {
  if(col < 0) {
    return false;
  }
  if(col > GAME_AREA_COL_MAX) {
    return false;
  }
  if(row < 0) {
    return false;
  }
  if(row > GAME_AREA_ROW_MAX) {
    return false;
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
