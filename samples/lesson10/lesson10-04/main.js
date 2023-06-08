let count = 0;
let timerId;

window.onload = () => {
  reset();
};

function reset() {
  clearInterval(timerId);
  count = 0;
  document.getElementById('timer').innerHTML = count;
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  document.getElementById('reset-button').disabled = true;
}

function start() {
  timerId = setInterval(countUp, 1000);
  document.getElementById('start-button').disabled = true;
  document.getElementById('stop-button').disabled = false;
  document.getElementById('reset-button').disabled = true;
}

function stop() {
  clearInterval(timerId);
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  document.getElementById('reset-button').disabled = false;
}

function countUp() {
  count++;
  document.getElementById('timer').innerHTML = count;
}
