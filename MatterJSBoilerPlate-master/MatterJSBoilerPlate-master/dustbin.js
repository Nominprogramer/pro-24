class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    this.body2= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.body3 = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.body3.width = width;
        this.body3.height = height; 
        this.image = loadImage("dustbingreen.png")
        
   }
   display(){
       fill("white");
       rect(this.body3.position.x, this.body3.position.y,this.body3.width, this.body3.height)
       rect((this.body3.position.x-(this.body3.width/2)), (this.body3.position.y-(this.body3.height*(2*(this.body3.width/100)))), this.body3.height, this.body3.width/2)
       rect((this.bodyb.position.x+(this.body3.width/2)), (this.body3.position.y-(this.body3.height*(2*(this.body3.width/100)))), this.body3.height, this.body3.width/2)
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
   }
}