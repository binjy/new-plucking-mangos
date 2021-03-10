
 class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.width = width;
      this.r = r
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("brown");
      imageMode(CENTER)
      image(this.image,0,0,this.r*2,this.r*2)
     // rect(pos.x, pos.y, this.width, this.height);
     pop()
    }
  };