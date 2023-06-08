let canvas;
let context;

const BORDER_COLOR = '#9c9c9c';
const CELL_SIZE = 20;

let posX = 5;
let posY = 0;

window.onload = () => {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  drawCell(posX, posY, '#63c9ff');
};

function moveRight() {
  if(canMoveTo(posX + 1, posY)) {
    context.clearRect(0, 0, 200, 400);
    posX++;
    drawCell(posX, posY, '#63c9ff');
  }
}

function moveLeft() {
  if(canMoveTo(posX - 1, posY)) {
    context.clearRect(0, 0, 200, 400);
    posX--;
    drawCell(posX, posY, '#63c9ff');
  }
}

function canMoveTo(col, row) {
  if(col < 0) {
    return false;
  }
  if(col > 9) {
    return false;
  }
  if(row < 0) {
    return false;
  }
  if(row > 19) {
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
