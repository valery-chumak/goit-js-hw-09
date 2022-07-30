const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
const body = document.querySelector('body');

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;
function onStartButtonClick(event) {
    startButton.disabled = true;

    timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}
function onStopButtonClick(event) {
    clearInterval(timerId);
    startButton.disabled = false;
}