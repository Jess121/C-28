class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        //NameSpacing = giving nicknames
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);    
        }
    }
    fly (){
        //detach the bird
        //detach the bodyA --> NO
        //bodyA should be emptied --> null (nothing)
        //bodyA = null
        this.sling.bodyA = null
    }
    
}