class Dustbin  {
  constructor(x, y, width, height) {
    var opt={
      'isStatic':true,
    }
    this.body=Bodies.rectangle(x,y,width,height,opt);
    this.image=loadImage("dustbingreen.png");
    this.width=width;
    this.height=height;

    World.add(world,this.body);
   // super(x,y,width,height);
    //isStatic:true;
   //isStatic: true
  //this.image=loadImage("dustbingreen.png");
  }

  display(){
    var pos=this.body.position;
    rectMode(CENTER);
    imageMode(CENTER);

    rect(pos.x,pos.y,this.width,this.height);
    image(this.image,1000,500,185,187);
  }
}