class Paper{
    constructor(x,y,r){
        let opts={
            restitution:0.7,
            isStatic:false,
            friction:0.4,
            density:1
        }

        this.radius = r;
        this.body = Bodies.circle(x,y,r,opts)
        World.add(world,this.body)
        this.image = loadImage("paper.png");
    }

    display(){
        let pos = this.body.position;
        fill("green");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}