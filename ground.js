//class Ground extends BaseClass {
  //constructor(x, y, width, height) {
  //super(x,y,width,height);
    //constructor(x,y,width,height) {
     //super(x,y,width,height)
     // this.image=loadImage()
   //}
  //display(){
    
  // rectMode(CENTER);
  //  rect(0, 0, this.width, this.height);
   //fill(255,0,0);
   //super.display();
  //}}

  class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  