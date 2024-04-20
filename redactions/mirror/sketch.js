// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let imgs = [];
let back, x;
let addMark = setInterval(makeMark, 1000);
let theta = 0;
let cx = 173;
let cy = 370

// let sound;

function preload() {
  sound = loadSound("sound.mp3");
  back = loadImage("imgs/back.jpg");
  //x = loadImage('imgs/x.png')
  imgs[0] = loadImage("imgs/dot.png");
  imgs[1] = loadImage("imgs/e.png");
  imgs[2] = loadImage("imgs/j.png");
  imgs[3] = loadImage("imgs/l.png");
  imgs[4] = loadImage("imgs/o.png");
  // imgs[5] = loadImage('imgs/dots.png');
  // imgs[6] = loadImage('imgs/c.png');
}

function setup() {
  createCanvas(600, 800);
  sound.play();
  sound.setLoop(true);
}

function draw() {
  imageMode(CORNERS);
  background(back);
  imageMode(CENTER);

  noCursor();
  for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
    //tint(255, 10);
    stroke(0, 30)
    line(marks[i].x,  marks[i].y, cx, cy)
    let d = dist(marks[i].x, marks[i].y, cx, cy);

    if (d < 60) {
      marks.splice(i, 1);
    }
  }
}
function makeMark() {
  marks.push(new Mark());
  if (marks.length > 100) {
    marks.splice(0, 1);
  }
}
function touchStarted() {
  userStartAudio();
}
