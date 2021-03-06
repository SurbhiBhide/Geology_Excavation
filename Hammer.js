class Hammer {
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y,110,40,options);

        this.width = 110;
        this.height = 40;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("gold");
        rect(0, 0, this.width, this.height);
        pop();
    }
};