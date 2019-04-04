import Object from "./object";

class Obstacle extends Object {
    constructor(x, y, w, h, vo) {
        super(x, y, w, h);
        this.vx = vo;
    }
    update(ax) {
        this.vx += ax;
    }

    move() {
        this.x -= this.vx;
    }


}
export default Obstacle;