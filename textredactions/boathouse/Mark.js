class Mark {
  constructor(i) {
    this.i = i;
    this.x = random(width);
    this.y = random(height);
    this.s = random(.5, 1.5);
    this.r = random(radians(360)); 
    this.o = random(255);
    this.angle = random(-1,1);
    this.inc = random(.1);

 
  }

  update() {
    // this.x += random(-0.05, 0.05);
    // this.y += random(-0.05, 0.05);
    
    this.o = map(sin(this.angle), -1, 1, 0, 255);
    this.angle += this.inc;
    if(this.o <= 1){
      //  this.x = random(width);
      // this.y = random(height);
      this.r = random(radians(360)); 
      //this.s = random(.5,1.5);
      
    }
    
  
    
  }
  display() {
    push();
    translate(this.x, this.y);
    //rotate(this.r);
    scale(this.s);
    tint(255, this.o);
    //imageMode(CENTER)
    image(this.i, 0,0)
    
    pop();
 
  }

}
