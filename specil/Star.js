class Star {
  constructor() {
    this.x = 235;
    this.y = 662;
    this.x2 = random(width);
    this.y2 = random(height);
    this.sc = random(0.3);
    this.r = random(radians(360));
    this.theta = random(-0.1, 0.1);
    this.t = 0;
    this.ts = random(0.0001);
    
 
  }
  move() {
    this.x = lerp(this.x, this.x2,  this.t);
    this.y = lerp(this.y, this.y2,  this.t);
    this.t += (1 - this.t) * this.ts;
    //this.t += pow(2, 10 * (this.t - 1))
    //this.t += sin(this.t * PI / 2)
    // this.x += this.xs;
    // this.y += this.ys;
    this.r += this.theta;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    imageMode(CENTER)
    scale(this.sc);
    //blendMode(BURN)
    image(star,0,0)
    pop();

  }

}

