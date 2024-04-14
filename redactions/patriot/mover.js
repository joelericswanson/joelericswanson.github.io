// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover{
  constructor() {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = random(-1,3);
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(random(-0.03, 0.05));

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    // noStroke();
    // strokeWeight(2);
    // fill(255);
    // ellipse(this.position.x, this.position.y, 2, 2);
     push();
  translate(this.position.x, this.position.y);
  //rotate(random(2*PI));
    //scale(random(1))

  image(dot, 0, 0); //as[int(random(as.length))]
  pop();
  }
  
}