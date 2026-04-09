// main.js

let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!")

    // this code affects the whole grid
    grid[0].style.transform =  `rotate(${Math.random() * 360}deg)`;

// just affects the grid divs
divs.forEach(function (div) {
    let scale = randomNumber(.5, 1.2);
    let translateX = randomNumber(0, 50);
    let translateY = randomNumber(0, 20);
    let rotate = randomNumber(0, 360);

    // 50% of the time ...
    if (Math.random() > .5) {
        scale = 1;
        translateX = randomNumber(0, 80);
        translateY = randomNumber(0, 80);
    }

    div.style.transform = `scale(${scale}) translate(${translateX}%,
     ${translateY}%) rotate(${rotate}deg)`;


});


}

document.body.style.transform = `rotate(15deg)`;

document.addEventListener("click", randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(2)); //->4
console.log(randomNumber(10)); //->100

let rotation = 0;
document.addEventListener("click", function () {
    // let min = 10
    // let max = 40
    rotation += randomNumber (1,200);
    document.body.styletransform = `rotate(${rotation}deg)`; 
});

let colors = ["purple", "green", "blue"];
color[1] //-> "green"
colors[randomNumber(0,colors.length-1)] //-> random number between 0 and 2


for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i]);
}
//-> 0, "red"
//-> 1, "green"
//-> 2, "blue"




colors[0] //-> "red"
colors[1] //-> "green"
colors[2] //-> "blue"
colors.length // -> 3

colors[2] = "blue" 
