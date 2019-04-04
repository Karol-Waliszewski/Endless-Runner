import Obstacle from "./obstacle";
import Player from "./player";
import Object from "./object";

import Game from "./game";

var player, ground, obstacles = [],
    points = 0,
    speed = Game.obstacle.acceleration;

function generateObstacles() {
    let h = random(Game.obstacle.minH, Game.obstacle.maxH);
    let w = random(Game.obstacle.minW, Game.obstacle.maxW);

    let obstacle = new Obstacle(Game.width + 100, Game.height - h, w, h, Game.obstacle.speed);
    obstacles.push(obstacle);

    setTimeout(generateObstacles, random(1500 + Game.obstacle.speed * 10, 2300 + Game.obstacle.speed * 10))
}

function objectsCollide(p, o) {
    if (p.x + p.r >= o.x && p.x - p.r <= o.x + o.w) {
        if (p.y + p.r >= o.y) {
            return true;
        }
    }
    return false;
}

window.keyPressed = function (key) {
    if (window.keyCode == 32) {
        player.jump();
    }
}

window.setup = function () {
    createCanvas(Game.width, Game.height);
    //textAlign(CENTER);
    noStroke();

    ground = new Object(0, Game.height - 40, Game.width, 40);
    player = new Player(100, Game.height - 250, Game.player.radius);
    generateObstacles();
}

window.draw = function () {
    background(220);
    fill("gray");
    text(`Points: ${points}`, 20, 20);

    ground.draw();

    for (let obstacle of obstacles) {
        obstacle.update(speed);
        obstacle.move();
        obstacle.draw();
        if (obstacle.x < -Game.obstacle.maxW) {
            obstacles.shift();
        }
    }

    player.update(0, Game.gravity);
    if (player.y + player.vy < Game.height - Game.ground.height - Game.player.radius) {
        player.move();
    } else {
        player.y = Game.height - Game.ground.height - Game.player.radius;
        player.isJumping = false;
    }
    player.draw();

    if (obstacles.length > 0) {
        if (objectsCollide(player, obstacles[0])) {
            textAlign(CENTER);
            text(`YOU LOST`, Game.width / 2, Game.height / 2);
            window.noLoop();
        }
    }

    speed += Game.obstacle.acceleration;
    points+= 1;
}