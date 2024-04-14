class Mark {
  constructor(i,x,y) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.s = 1;
    this.r = 0; //random(radians(360));

 
  }

  move() {
    this.x += random(-0.05, 0.05);
    this.y += random(-0.05, 0.05);
    this.r += random(-0.0001, 0.001); 
    this.s += random(-0.001, 0.001); 
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    scale(this.s);
    imageMode(CENTER)
 
    image(this.i,0,0)
    pop();
 
  }

}
