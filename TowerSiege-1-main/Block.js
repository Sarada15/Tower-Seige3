class Block {
  constructor(x, y, width, height) {
      var options = {
          //isStatic : true,
          "restitution" : 0.8,
          "friction" : 2,
          "density" : 1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
    
  }