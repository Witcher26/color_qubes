const countDownElement = document.getElementById('countdown');
let time = 3600;

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const munutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownElement.innerHTML = `${munutes}:${seconds}`;

    time--
}