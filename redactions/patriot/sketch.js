// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let movers = [];
let as = [];
let back, dot;
// let addMark = setInterval(makeMark, 200);
let x = 0;
let y = 0;

let osc, playing, fre, amp;
let sound;

function preload() {
  sound = loadSound('sound.mp3');
   back = loadImage('imgs/back.jpeg')
    dot = loadImage('imgs/dot.png')
    as[0] = loadImage('imgs/a.png');
    as[1] = loadImage('imgs/a2.png');
    as[2] = loadImage('imgs/a3.png');
    as[3] = loadImage('imgs/a4.png');
    as[4] = loadImage('imgs/a5.png');
    scratch = loadImage('imgs/scratch.png');
  
 
}

function setup() {
  createCanvas(600, 800);
  //createCanvas(displayWidth, displayHeight);
  sound.play();
  sound.setLoop(true);
    for (var i = 0; i < 50; i++) {
     movers[i] = new Mover();
      
  }
  x = random(width);
  y = random(height);


//   osc = new p5.Oscillator('sine');
//    osc.start();
  

}

function draw() {

  imageMode(CORNERS)
  background(back);
  imageMode(CENTER);
  noCursor();
  push();
  translate(mouseX, mouseY);
  //rotate(random(2*PI));
  image(dot, 0, 0);
  
  pop();
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
  
  x = lerp(x, mouseX, 0.001);
  y = lerp(y, mouseY, 0.001);

 image(scratch, x, y);

}
 
function touchStarted(){
  userStartAudio();
}


