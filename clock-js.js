let clockContainer = document.querySelector(".js-clock"); //div
let clockHour = clockContainer.querySelector(".hour");
let clockMinutes = clockContainer.querySelector(".minutes");
let clockColon = clockContainer.querySelector(".colon");

let colon = true;

function getTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    clockHour.innerText = `${(hours < 10)? `0${hours}`:hours}`;
    if (!colon){
        clockColon.style.visibility = 'hidden';
        colon = true;
    } else {
        clockColon.style.visibility = 'visible';
        colon = false;
    }
    clockMinutes.innerText = `${(minutes < 10)? `0${minutes}`:minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();