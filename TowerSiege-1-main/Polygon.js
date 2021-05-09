class Polygon {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 1,
            density : 1.2    
        }
            this.body = Bodies.circle(x,y,radius,options);
            this.radius = radius;

            this.image = loadImage("polygon.png");

            World.add(world,this.body);
    }
        display() {
            var pos = this.body.position;

            push();
            imageMode(CENTER);
            translate(pos.x,pos.y);
            image(this.image,0,0,35,35);
            pop();
        }
}