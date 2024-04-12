class Mark {
  constructor(i,x,y) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.s = 1;
    this.r = 0; //random(radians(360));
    this.o = random(255);
    this.xoff = 0;
    this.yoff = 0;
    this.angle = random(-1,1);
    this.inc = random(.05);
    this.rate = random(-0.001,0.001);

 
  }

  update() {
    // this.x += random(-0.05, 0.05);
    // this.y += random(-0.05, 0.05);

    
    let dx = mouseX - this.x;
    this.xoff += dx * 0.0005;
   // let dy = mouseY - this.y;
   // this.yoff += dy * 0.0001;
  
    
    this.o = map(sin(this.angle), -1, 1, 0, 255);
    this.angle += this.inc;
    
  }
  display() {
    imageMode(CENTER)
    push();
    translate(this.x, this.y);

    rotate(this.r);
    tint(255, this.o/0.5);
    image(this.i, this.xoff/3,0)
    this.r += this.rate
    tint(255, 255);
    image(this.i, this.xoff/2,0)
    
    tint(255, this.o);
    
    image(this.i, this.xoff,0)
    this.r += this.rate
    
    pop();
 
  }

}
