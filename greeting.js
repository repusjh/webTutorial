const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const DISPLAY_CN = "showing";

function handleSubmit(evnet){
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(USER_LS, currentValue);

    paintName(currentValue);
}

function setName(name){
    form.classList.add(DISPLAY_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintName(text){
    form.classList.remove(DISPLAY_CN);
    greeting.classList.add(DISPLAY_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        setName();
    } else {
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();