class Mark {
  constructor(i) {
    this.i = i;
    this.x = random(width);
    this.y = -100;
    this.r = random(radians(360)); 
    this.speed = random(1);
    this.o = random(-10,10);

 
  }

  update() {
  
    this.y += this.speed;
    
    //this.o = map(sin(this.o), -1, 1, -10, 10);
    this.r =  sin(frameCount/this.o)*this.o;
    //this.r += this.o;
    //this.o += .0001;
  

  
    
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    scale(this.s);
    
    imageMode(CENTER);
    blendMode(MULTIPLY)
    image(this.i, 0,0)
    
    pop();
 
  }

}
