const containerNode = document.getElementById("container");
const SQUARES = 10000;
const colors = ['white', 'red', 'yellow', 'lime', 'blue', 'aqua', 'fuchsia'];

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColorToElement(square);
    });

    square.addEventListener('mouseout', () => {
        removeColorToElement(square);
    });
    containerNode.appendChild(square);
};

function setColorToElement(el) {
    const color = getRandomColor();
    el.style.background = color;
};

function removeColorToElement(el){
    el.style.background = '#1d1d1d';
};

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
};
