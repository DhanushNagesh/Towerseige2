class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 1
        }
        //console.log(pointB)
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        //this.pointB = pointB
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(Body1){
        this.sling.bodyA = Body1
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
       }
    }
    
}