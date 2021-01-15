class Box {
    constructor(x,y){

        this.body = Bodies.rectangle(x,y,50,50, {isStatic: false, restitution: 0.7, density: 1.2, friction: 1});
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);// translates the (0,0) of the canvas to the pos.x and pos.y
        // so that we can rotate the rectangle about its center.
        rotate(this.body.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();
    }
}