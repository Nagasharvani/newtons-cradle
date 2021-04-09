//creating blue print for constraint
class chain{
//creating constructor taking bodyA and bodyB as arguments
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        //creating options for constraint
        var options={
     bodyA:bodyA,
     bodyB:bodyB,
     pointB:{x:offsetX,y:offsetY},
     
     
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
// creating chain using constraint
        this.chain=Constraint.create(options);
        //adding to the world
        World.add(world,this.chain);
        
    }

    display()
    {
        //name spacing
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var anchorX=pointB.x+this.offsetX
        var anchorY=pointB.y+this.offsetY
        //creating line between the bodies
        strokeWeight(4);

       stroke("red")
        line(pointA.x,pointA.y,anchorX,anchorY)
    }
}