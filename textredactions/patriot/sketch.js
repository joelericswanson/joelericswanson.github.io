// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let movers = [];
let as = [];
let back, dot;
// let addMark = setInterval(makeMark, 200);

let osc, playing, freq, amp;
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
  
 
}

function setup() {
  createCanvas(632, 1000);
  sound.play();
  sound.setLoop(true);
    for (var i = 0; i < 1000; i++) {
     movers[i] = new Mover();
      
  }
  
 

  osc = new p5.Oscillator('sine');
   osc.start();
  

}

function draw() {

  imageMode(CORNERS)
  background(back);
  imageMode(CENTER);
  noCursor();
  push();
  translate(mouseX, mouseY);
  //rotate(random(2*PI));
  image(as[int(random(as.length))], 0, 0);
  pop();
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
  
   freq = constrain(map(mouseX, 0, width, 10, 50), 10, 50);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}
 


