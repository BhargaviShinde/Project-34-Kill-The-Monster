class Ground {
    constructor(x,y){

        this.body = Bodies.rectangle(x,y,920,10, {isStatic: true});
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("lightblue");
        rectMode(CENTER);
        rect(pos.x,pos.y,920,10);
        pop();
    }
}