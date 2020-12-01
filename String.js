class String{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.stirng=Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        fill("white");
        line(bodyA.x, bodyA.y, bodyB.x+this.offsetX, bodyB.y+offsetY);
    }
}