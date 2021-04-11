const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const DELAY_CHANGE = 1000;
const min = 0;
const max = colors.length-1;
let hasStop = false;


const refs = {
    buttonStart: document.querySelector('button[data-action = start]'),
    buttonStop: document.querySelector('button[data-action = stop]'),
    body: document.body
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


refs.buttonStart.addEventListener('click', onChangeColor);
refs.buttonStop.addEventListener('click', onStop);

function onChangeColor () {
    hasStop = false;
    refs.buttonStart.disabled = true;


   const intervalId = setInterval(() => {
    if(hasStop) {
        clearInterval(intervalId)
        return;
     }
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    }, DELAY_CHANGE);
}

function onStop () {
    hasStop = true;
    refs.buttonStart.disabled = false;
}
