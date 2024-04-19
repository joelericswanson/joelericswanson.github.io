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
    this.inc = random(-1,1);
   

 
  }

  update() {
    // this.x += random(-0.05, 0.05);
    // this.y += random(-0.05, 0.05);

    
    let dx = mouseX - this.x;
    this.xoff += dx * 0.001;
    let dy = mouseY - this.y;
    this.yoff += dy * 0.001;
  
    

    
  }
  display() {
    imageMode(CENTER)

    
    for(let i = 0; i < 50; i++){
      push();
      translate(this.x, this.y);
      rotate(this.angle + this.inc * i);
      tint(255, random(255));
      image(this.i, this.xoff/i,this.yoff/i)
      pop();
      
      
    }
//     rotate(this.r);
//     tint(255, this.o/0.5);
//     image(this.i, this.xoff/3,0)
//     this.r += this.rate
//     tint(255, 255);
//     image(this.i, this.xoff/2,0)
    
//     tint(255, this.o);
    
//     image(this.i, this.xoff,0)
//     this.r += this.rate
    

 
  }

}
function touchStarted() {
  userStartAudio();
}

