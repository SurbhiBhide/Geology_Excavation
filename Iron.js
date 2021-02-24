class Iron {
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':5,
            'density':2
        }
        this.body = Bodies.rectangle(x, y,110,40,options);

        this.width = 110;
        this.height = 40;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("silver");
        rect(0, 0, this.width, this.height);
        pop();
    }
};