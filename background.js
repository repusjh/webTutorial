const bodyInHTML = document.querySelector("body");
const IMG_NUMBER = 5;

function paintImg(imgNumber){
    const image = new Image();
    image.src=`./images/land${imgNumber}.jpg`;

    image.classList.add("bgImage");
    bodyInHTML.appendChild(image);
}

function genRandom(){
    const number = Math.ceil(Math.random() * 5);
    
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();