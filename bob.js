class bob{
     constructor (x,y){
         
     var options={
         isStatic:false,
         restitution:1,
         friction:0,
         density:0.8
     }
     this.body = Bodies.circle(x, y, 50,  options);
      this.radius = 50;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("green");
      ellipse(0, 0, this.radius,this.radius);
      pop();
}


}