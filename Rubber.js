class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 90, options);
      this.raduis = 90;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("white");
      fill("red");
      circle(0, 0,90);
      pop();
    }
  };
  