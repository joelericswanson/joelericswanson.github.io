class Mark {
  constructor() {
    this.i = imgs[int(random(imgs.length))];

    this.x = random(width);
    this.y = random(100, height);
    this.s = random(1);
    this.r = random(radians(360)); 
    this.a = 1;
   
    // this.angle = random(-1,1);
    this.inc = random(-0.001,0.001);

 
  }

  update() {
    // this.x += random(-0.1, 0);
    // this.y += random(-0.05, 0.05);
   // this.r += random(-.05, 0.001);
    this.r += this.inc;
   if(this.a <= 255){
     this.a *= 1.1;

   }

    
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
     scale(this.s);
    tint(255, this.a);
    blendMode(MULTIPLY)
    imageMode(CENTER);
    image(this.i, 0,0)
   
    
    pop();
 
  }

}
