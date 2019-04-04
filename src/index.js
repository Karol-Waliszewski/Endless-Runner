import Obstacle from "./obstacle";
import Player from "./player";
import Object from "./object";

import Game from "./game";

var player, ground, obstacles = [];

function createObstacle() {
    let h = random(Game.obstacle.minH, Game.obstacle.maxH);
    let w = random(Game.obstacle.minW, Game.obstacle.maxW);

    let obstacle = new Obstacle(Game.width + 100, Game.height - h, w, h, Game.obstacle.speed);
    obstacles.push(obstacle);

    setTimeout(createObstacle, random(1500 + Game.obstacle.speed * 10, 2300 + Game.obstacle.speed * 10))
}

window.keyPressed = function (key) {
    if (window.keyCode == 32) {
        player.jump();
    }
}

window.setup = function () {
    createCanvas(Game.width, Game.height);
    ground = new Object(0, Game.height - 40, Game.width, 40);
    player = new Player(100, Game.height - 250, Game.player.radius);
    createObstacle();
}

window.draw = function () { 
    background(220);
    fill("gray");
    noStroke();

    ground.draw();

    for (let obstacle of obstacles) {
        obstacle.update(Game.obstacle.acceleration);
        obstacle.move();
        obstacle.draw();
        if (obstacle.x < 0) {
            obstacles.shift();
        }
    }

    player.draw();

    player.update(0, Game.gravity);

    if (player.y + player.vy < Game.height - Game.ground.height - Game.player.radius) {
        player.move();
    } else {
        player.y = Game.height - Game.ground.height - Game.player.radius;
    }
}