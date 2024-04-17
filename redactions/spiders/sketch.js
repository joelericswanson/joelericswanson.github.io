// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let imgs = [];
let back, x;
let addMark = setInterval(makeMark, 200);
let theta = 0;


function preload() {
    sound = loadSound('sound.mp3');
   back = loadImage('imgs/back.jpg')
   x = loadImage('imgs/x.png')
  imgs[0] = loadImage('imgs/d.png');
  imgs[1] = loadImage('imgs/dot.png');
  imgs[2] = loadImage('imgs/e.png');
  imgs[3] = loadImage('imgs/i.png');
  imgs[4] = loadImage('imgs/p.png');
  imgs[5] = loadImage('imgs/r.png');
  imgs[6] = loadImage('imgs/s.png');
  imgs[7] = loadImage('imgs/s2.png');

}

function setup() {
 //createCanvas(600, 800);
   createCanvas(displayWidth, displayHeight);
  sound.play();
  sound.setLoop(true);
}

function draw() {
  noCursor();

  imageMode(CORNERS)
  background(back);
  imageMode(CENTER);
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
  push();
  translate(mouseX, mouseY);
  //rotate(theta);
  //image(x, 0, 0);
  pop();
  if(mouseX > width/2){
    theta += random(0.001);
  } else {
     theta -= random(0.001);
  }
}
function makeMark(){ 
  	marks.push(new Mark());
    if(marks.length > 1000){
      marks.splice(0,1);      
    }
  
}
function mousePressed(){
  marks.length = 0;
  
}
function touchStarted() {
  userStartAudio();
}


