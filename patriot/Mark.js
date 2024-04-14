class Mark {
  constructor() {
    this.i = imgs[int(random(imgs.length))];
    this.a = 0;
    this.x = mouseX;
    this.y = mouseY;
    this.r = random(radians(360));
//     let g = random(1);
//     if(g < .25){
//       this.r = 0;  
//     } else if(g < 0.5){
//       this.r = radians(90);  
//     } else if(g < 0.75){
//       this.r = radians(180);
//     as else {
//         this.r = radians(270);
//     }
  this.ler = random(-0.005, 0.005);
   

 
  }

  update() {
  
    this.x = lerp(this.x, mouseX,  this.ler);
    this.y = lerp(this.y, mouseY,  this.ler);
  }
  display() {
    push();
      translate(this.x, this.y);

     rotate(this.r);
     // scale(this.s, this.s);
      translate(0, 0);
     // tint(255, this.a);

      image(this.i, 0, 0)
    pop();
 
  }

}
