class Hero{
    constructor(x,y){
        this.image = loadImage("Hero.png")
        this.body = Bodies.rectangle(x,y,170,130,{density: 3, friction: 1}); 
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,180,200);
        //fill("grey");
        //rectMode(CENTER);
        //rect(pos.x,pos.y,170,130);
        pop();
    }
}