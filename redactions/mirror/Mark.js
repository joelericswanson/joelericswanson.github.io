class Mark {
  constructor() {
    this.i = imgs[int(random(imgs.length))];
    this.a = 1;
    this.x = mouseX;
    this.y = mouseY;
    this.s = 1;//random(.5, 5);
    this.offset = int(random(-200, 200));
    this.seed = random(1);
    if (this.seed < 0.25) {
      this.r = 0;
    } else if (this.seed < 0.5) {
      this.r = radians(90);
    } else if (this.seed < 0.75) {
      this.r = radians(180);
    } else {
      this.r = radians(270);
    }
  }


  update() {
        if(this.a <= 255){
         this.a *= 1.1;
       }
    // this.x += random(-0.1, 0);
    // this.y += random(-0.05, 0.05);
    // this.r += random(-.05, 0.001);
    this.x = lerp(this.x, 173, 0.001);
    this.y = lerp(this.y, 370, 0.001);
    //      if(mouseX > 405 && mouseX < 505 && mouseY > 151 && mouseY < 212){
    //         this.a = 0;
    //     }
  }
  display() {
    push();
      translate(this.x, this.y);
       
        push();
          //scale(this.s, this.s);
          translate(-this.offset, 0);
          tint(255, this.a);
          //blendMode(MULTIPLY)
          rotate(this.r);
          image(this.i, 0, 0);
        pop();
        push();
          scale(-this.s, this.s);
          translate(this.offset, 0);
          tint(255, this.a);
          //blendMode(MULTIPLY)
          rotate(this.r);
          image(this.i, 0, 0);
      pop();
    pop();
  }
}
