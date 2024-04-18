
// https://ojack.xyz/PIXELSYNTH/
// add sound when everyting is stacked over I
const particles = [];
let marks = [];
let imgs = [];
let back, o, o2, o3, x;
let addMark = setInterval(makeMark, 1000);

// let sound;

function preload() {
   sound = loadSound('sound.mp3');

  back = loadImage('imgs/back.png');
  o = loadImage('imgs/o.png');
  o2 = loadImage('imgs/o2.png');
  o3 = loadImage('imgs/oo.png');
  x  = loadImage('imgs/x.png');
 
}

let loadedImage = [];

function setup() {
  createCanvas(600, 800);
  sound.play();
  sound.setLoop(true);
  imgs.push(o);
  imgs.push(o2);
  imgs.push(o3);
  imgs.push(x);
  const particlesLength = 3;

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle()); //initialize a new Particle for every spot in the particles array
  }
}

function draw() {
  background(back);
   let mousePos = createVector(mouseX, mouseY); //replace with Kinect data

  particles.forEach(function(p, index) {
    p.update();
    p.draw();
    p.attracted(mousePos);

  });

  // If you press any key on the keyboard, a circle will appear
  // and follow the position of your mouse around.
  // fill(255);
  // if (keyIsPressed == true) {
  // circle(mouseX, mouseY, 80);
  // }
  
 //noCursor();

   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
}
function touchStarted() {
  userStartAudio();
}

function makeMark(){
  particles.push(new Particle());
   if(particles.length > 50){
     particles.splice(0,1);
     console.log(particles.length);
   }
//       marks.splice(0,1);
//   	marks.push(new Mark());
//     if(marks.length > 500){
//       marks.splice(0,1);
      
    
  
}


//GLOBAL VARIABLES

//create an object to hold the Kinect data

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);

//   const particlesLength = Math.floor(window.innerWidth*3); //number of Particles is 3 times width of the window

//   for (let i = 0; i < particlesLength; i++) {
//     particles.push(new Particle()); //initialize a new Particle for every spot in the particles array
//   }
// }


class Particle {

  constructor() {
    this.pos = createVector(random(width), random(height));

    this.color = random(100, 255); //define how see thru each particle is
    this.vel = createVector(random(-0.001, 0.001), random(-0.001, 0.001))
    this.acc = createVector(random(-0.001, 0.001), random(-0.001, 0.001));
    this.i = imgs[int(random(imgs.length))];
    this.s = random(1);
    this.r = random(radians(360)); 
    this.inc = random(-0.01,0.01);
    this.alpha = 1;

    // this.prevSize = [];
    // this.history = [];

  }

  //Draw a single Particle
  draw() {
    
      push();
    translate(this.pos.x, this.pos.y);
    rotate(this.r);
    scale(this.s);
    tint(255, this.alpha);
    blendMode(MULTIPLY)
    imageMode(CENTER);
    image(this.i, 0,0)
   
    
    pop();

  
  }

  //Particle rises or falls and bounces off the edges
  update() {
    this.pos.add(this.vel); //add velocity to the x, y positions to make it move
    this.vel.add(this.acc); //add acceleration to the velocity to mimic physics
    this.detectEdges();
    // this.attracted();
    this.r += this.inc;
   if(this.alpha <= 255){
     this.alpha *= 1.1;
   }

    // Push the position of the circle to history array
    // this.history.push(this.pos);

    // Make the particles repel away from the cursor
  }

  detectEdges() {

    // If the Particle touches the left or right edges of the canvas,
    // it will reverse direction.
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -0.9;
      this.inc *= -1;
    }

    // If the Particle touches the top or bottom edges of the canvas,
    // it will reverse direction.
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -0.9;
      this.inc *= -1;
    }
  }

  attracted(mousePos) {
    let force = p5.Vector.sub(mousePos, this.pos); //the force on each particle moves in is the target position minus its current position (also its distance)
    let distSquared = force.magSq(); //the distance between current and target position squared (will be used to calculate gravity force enacted on particle)
    let grav = -10; //set the gravity enacted on the particle (based on universal gravitational constant)
    let magnitude = grav / distSquared; //the magnitude of the force enacted on each particle
    force.setMag(magnitude);
    this.acc = force;
  }

}


