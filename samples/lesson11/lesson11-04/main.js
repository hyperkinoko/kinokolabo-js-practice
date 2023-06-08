let canvas;
let context;

const BORDER_COLOR = '#9c9c9c';
const CELL_SIZE = 20;

window.onload = () => {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  drawCell(5, 1, '#63c9ff');
};

function move() {
  context.clearRect(0, 0, 300, 300);
  drawCell(6, 2, '#63c9ff');
}

function drawCell(col, row, color) {
  context.fillStyle = color;
  context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  context.lineWidth = 1;
  context.strokeStyle = BORDER_COLOR;
  context.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}
