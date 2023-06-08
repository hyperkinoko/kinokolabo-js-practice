let canvas;
let context;

window.onload = () => {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  context.fillStyle = '#63c9ff';
  context.fillRect(10, 10, 100, 100);
  context.lineWidth = 1;
  context.strokeStyle = '#9c9c9c';
  context.strokeRect(10, 10, 100, 100);
};

function refresh() {
  context.clearRect(0, 0, 300, 300);
}
