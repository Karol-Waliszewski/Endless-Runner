import Game from "./game";
import Variables from './variables';

var game;

const restart = () => {
    game = new Game();
    game.init();
    window.loop();
}

const addListeners = () => {
    let restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", function () {
        restartButton.blur();
        restart();
    });
}

window.keyPressed = function (key) {
    game.handleKey(window.keyCode);
}

window.setup = function () {
    let canvas = createCanvas(Variables.width, Variables.height);
    canvas.parent('playground');
    noStroke();
    addListeners();
    restart();
}

window.draw = function () {
    background(220);
    fill('#000');
    text(`Points: ${game.points}`, 20, 20);
    game.tick();
}