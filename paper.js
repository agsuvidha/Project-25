class Paper  {
  constructor(x,y,radius) {
    //super(x,y,radius)
   //this.image=loadImage("paper.png")
    var options = {
      
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        
      
    }
    this.body = Bodies.circle(x, y, radius, options);
   // this.width = width;
   // this.height = height;
    this.radius=radius
    
    World.add(world, this.body);
    this.image=loadImage("paper.png")
  // super.constructor();
  
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var crcl=this.body.position;
    
    image (this.image,this.body.position.x,this.body.position.y,70,70);
    //var pos =this.body.position;
  // var angle = this.body.angle;
  // push();
  // translate(pos.x, pos.y);
  // rotate(angle);
  //  ellipseMode(RADIUS);
   // strokeWeight(4);
   // stroke("green");
  //fill(0,0,255);
   // ellipse(0, 0, this.radius);
  // pop();
  //super.display();
  }
};