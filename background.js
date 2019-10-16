const bodyInHTML = document.querySelector("body");
const IMG_NUMBER = 4;

function paintImg(imgNumber){
    //const image = new Image();
    bodyInHTML.style.backgroundImage = `url(./images/land${imgNumber}.jpg)`;

    // image.classList.add("bgImage");
    // image.style.backgroundAttachment="fixed";

    // bodyInHTML.appendChild(image);
    
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();