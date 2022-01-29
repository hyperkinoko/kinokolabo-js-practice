let count = 0;
let timerId;

window.onload = () => {
  document.getElementById("stop-button").disabled = true;
};

function start() {
  timerId = setInterval(countUp, 1000);
  document.getElementById("start-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
}

function stop() {
  clearInterval(timerId);
  document.getElementById("start-button").disabled = false;
  document.getElementById("stop-button").disabled = true;
}

function countUp() {
  count++;
  document.getElementById("timer").innerHTML = count;
}
