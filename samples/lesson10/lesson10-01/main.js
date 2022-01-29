let count = 0;
let timerId;

window.onload = () => {
  timerId = setInterval(countUp, 1000);
};

function countUp() {
  count++;
  document.getElementById("timer").innerHTML = count;
}
