// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let letters = [];
let v, a, l, back;
//let addMark = setInterval(makeMark, 1000);
let sound;
let xoff = 0;
let yoff = 0;
let joel;
let jx = 150;

function preload() {
  sound = loadSound('sound.mp3');
  bg = loadImage('imgs/back.png');
  v  = loadImage('imgs/v.png');
  a  = loadImage('imgs/a.png');
  l  = loadImage('imgs/l.png');
  joel = loadImage('imgs/joel.png');

 
}

let loadedImage = [];

function setup() {
  createCanvas(600, 800);
  x = width/2;

  sound.play();
  sound.setLoop(true);

  letters.push(new Mark(v, 100, 160));
  letters.push(new Mark(a, 130, 195));
  letters.push(new Mark(l, 180, 175));
}

function draw() {

  noCursor();
  imageMode(CORNERS);
  background(bg);
  xoff = map(mouseY, 0, height, 0, width);
  xoff = map(mouseX, 0, width, 0, height);
  
  blendMode(DARKEST);
  tint(255, 1)
  image(bg, xoff, yoff);
  imageMode(CENTER)
  for (var i = letters.length-1; i >= 0; i--) {
    letters[i].display();
    letters[i].move();
    letters[i].a = random(255);

  }
   for (var i = marks.length-1; i >= 0; i--) {
    marks[i].display();
    marks[i].move();
    if(marks[i].isDone()){ 
      marks.splice(i,1) 
    }
  }
  tint(255, 255)
  image(joel, jx, 700);
  jx += 1;

}

function makeMark(){
    marks.push(new Mark(a,mouseX, mouseY));
  	if(marks.length > 50){
      marks.splice(0,1);
      
      
    }
  
}

class Mark {
  constructor(i,x,y) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.xs = random(-0.01, 0.01);
    this.ys = random(-0.01, 0.01);
    this.r = 0; //random(radians(360));
    this.theta = random(-0.001, 0.001);
    this.ler = random(-0.0001, 0.001);
    this.a = 255;
    //this.sc = .5
 
  }

  move() {
    this.x = lerp(this.x, mouseX,  this.ler);
    this.y = lerp(this.y, mouseY,  this.ler);
    this.x += this.xs;
    this.y += this.ys;
    this.a -= 1;
    this.r += this.theta;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.r);
    //scale(this.sc);
    tint(255, this.a);
    //blendMode(DIFFERENCE);
    image(this.i,0,0)
    pop();
    this.r += this.theta;
  }
  isDone(){
    if(this.a <= 0){
      return true;
    }
  }

}


function mouseMoved() {
 makeMark();
}

function touchStarted() {
  userStartAudio();
}


