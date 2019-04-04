class Object {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        this.y = y;
        this.x = x;

    }
    draw() {
        fill("gray");
        rect(this.x, this.y, this.w, this.h);
    }

}

export default Object;