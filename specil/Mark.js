class Mark {
  constructor(i,x,y) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.xs = random(-0.01, 0.01);
    this.ys = random(-0.01, 0.01);
    this.r = 0; //random(radians(360));
    this.theta = random(0.0001, -0.0001);
    this.ler = random(0.0001, 0.000001);
 
  }

  move() {
    this.x = lerp(this.x, 234,  this.ler);
    this.y = lerp(this.y, 664,  this.ler);
    this.x += this.xs;
    this.y += this.ys;
    this.r += this.theta;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);

    imageMode(CENTER)
    image(this.i,0,0)
    pop();
 
  }

}
