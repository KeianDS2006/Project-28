class Slingshot{
    constructor(body, anchor){
    var options={bodyA: body,pointB: anchor, stiffness: 0.004, length:1}
    this.pointB=anchor;
    this.pointA=body;
    this.Slingshot=Constraint.create(options);
    World.add(world, this.Slingshot);
    }
    attach(body){
    this.Slingshot.bodyA=body;
    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    display(){
    if(this.Slingshot.bodyA){
    var pointA=this.Slingshot.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}