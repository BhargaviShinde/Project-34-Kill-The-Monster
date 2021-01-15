class Monster{
    constructor(x,y){

        this.image1 = loadImage("Monster-01.png");
        this.image2 = loadImage("Monster-02.png");
        this.body = Bodies.rectangle(x,y,200,200,{density: 2, friction: 1}); 
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        //fill("black");
        //rectMode(CENTER);
        //rect(pos.x,pos.y,400,400);
        imageMode(CENTER);
        image(this.image1,pos.x,pos.y,200,200);
        if(this.body.speed>3){
            image(this.image2,pos.x,pos.y,200,200);
        }
        pop();
    }
}