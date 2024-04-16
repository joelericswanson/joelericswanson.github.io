class Mark {
  constructor(i, x, y, s) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.r = random(radians(360)); 
    this.speed = s;
    this.o = random(-100,100);

 
  }

  update() {
  
    this.y += this.speed;
    
    //this.o = map(sin(this.o), -1, 1, -10, 10);
    this.r =  sin(frameCount/this.o)*2;
    //this.r += this.o;
    //this.o += .0001;
  

  
    
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    scale(this.s);
    
    imageMode(CENTER);
   // blendMode(MULTIPLY)
    image(this.i, 0,0)
    
    pop();
 
  }

}
