import Obstacle from "./obstacle";
import Player from "./player";
import Object from "./object";
import Variables from "./variables";

class Game {
    constructor() {
        this.player = new Player(100, Variables.height - 250, Variables.player.radius);
        this.ground = new Object(0, Variables.height - 40, Variables.width, 40);
        this.obstacles = [];
        this.points = 0;
        this.speed = Variables.obstacle.acceleration;
    }

    init() {
        this.generateObstacle();
    }

    generateObstacle() {
        let h = random(Variables.obstacle.minH, Variables.obstacle.maxH);
        let w = random(Variables.obstacle.minW, Variables.obstacle.maxW);
        let obstacle = new Obstacle(Variables.width + 100, Variables.height - h, w, h, Variables.obstacle.speed);
        this.obstacles.push(obstacle);

        setTimeout(() => {
            this.generateObstacle()
        }, random(1500 + Variables.obstacle.speed * 10, 2300 + Variables.obstacle.speed * 10));
    }

    checkCollison(player, object) {
        // TODO: Change player to circle rather than rectangle
        if (player.x + player.r >= object.x && player.x - player.r <= object.x + object.w) {
            if (player.y + player.r >= object.y) {
                return true;
            }
        }
        return false;
    }

    tick() {
 
        // Ground
        this.ground.draw();

        // Obstacles
        for (let obstacle of this.obstacles) {
            obstacle.update(this.speed);
            obstacle.move();
            obstacle.draw();
            // Removing unnecessary objects
            if (obstacle.x < -Variables.obstacle.maxW) {
                this.obstacles.shift();
            }
        }

        // Player
        this.player.update(0, Variables.gravity);
        if (this.player.y + this.player.vy < Variables.height - Variables.ground.height - Variables.player.radius) {
            this.player.move();
        } else {
            this.player.y = Variables.height - Variables.ground.height - Variables.player.radius;
            this.player.isJumping = false;
        }
        this.player.draw();


        // Checking for defeat
        if (this.obstacles.length > 0) {
            if (this.checkCollison(this.player, this.obstacles[0])) {
                textAlign(CENTER);
                text(`YOU LOST`, Variables.width / 2, Variables.height / 2);
                 textAlign(LEFT);
                window.noLoop();
            }
        }

        // Update
        this.speed += Variables.obstacle.acceleration;
        this.points += 1;
    }

    handleKey(keycode) {
        // Spacebar
        if (keycode == 32) {
            this.player.jump();
        }
    }
}

export default Game;