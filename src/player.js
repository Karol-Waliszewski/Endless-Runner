class Player {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.vx = 0;
        this.r = r;
        this.color = "red"
        this.jStrength = r;
        this.isJumping = false;
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
        if (!this.isJumping) {
            this.isJumping = true;
            this.vy = 0;
            this.vy -= this.jStrength;
        }
    }
}

export default Player;