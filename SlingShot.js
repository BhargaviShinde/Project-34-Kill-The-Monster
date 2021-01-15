class Sling{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 550
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA  = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        push();
        strokeWeight(5);
        stroke("darkviolet");
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}