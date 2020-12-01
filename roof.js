class roof {
    constructor(x, y) {

        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 600, 50, options);
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        fill(0);
        rect(0, 0, 600, 50);
        pop()

    }
}