const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const startBtnEl = document.querySelector('[data-action=start]');
const stopBtnEl = document.querySelector('[data-action=stop]')

let intervalId = null;


startBtnEl.addEventListener('click', changeBgInt);

function changeBackground() {
    return document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
    }

function changeBgInt() {
    startBtnEl.disabled = true;
    intervalId = setInterval(changeBackground, 1000);
    };

function stopBgChange() {
    startBtnEl.disabled = false;
    clearInterval(intervalId);
}

stopBtnEl.addEventListener('click', stopBgChange)
