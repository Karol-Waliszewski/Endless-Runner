class Player {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.vx = 0;
        this.r = r;
        this.color = "red"
        this.jStrength = r;
    }
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.r);
    }

    update(ax, ay) {
        this.vx += ax;
        this.vy += ay;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    jump() {
        this.vy = 0;
        this.vy -= this.jStrength;
    }
}

export default Player;