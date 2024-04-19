class Mark {
  constructor(i) {
    this.i = i;
    this.x = random(width);
    this.y = random(height);
    this.s = random(1);
    this.r = random(radians(360)); 
    this.o = 255
    this.angle = random(-0.01,0.01);
    this.inc = random(0.01);
    this.ler = random(0.001);

 
  }

  update() {
    this.x = lerp(this.x, 100,  this.ler);
    this.y = lerp(this.y, 400,  this.ler);
    this.r += random(-0.01, 0.01);
   
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
