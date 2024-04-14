class Mark {
  constructor(i) {
    this.i = i;
    this.x = random(270, 700);
    this.y = 400;
    this.s = random(1);
    this.r = random(radians(360)); 
    this.o = 255
    this.angle = random(-0.01,0.01);
    this.inc = random(0.01);

 
  }

  update() {
    this.x += random(-0.1, 0);
    this.y += random(-0.005, 0.005);
    this.r += random(-0.01, 0.01);
    //this.s += random(-.1, .1);
    

    
  
    
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
   // scale(this.s);
    tint(255, this.o);
    imageMode(CENTER)
    image(this.i, 0,0)
    
    pop();
 
  }

}
