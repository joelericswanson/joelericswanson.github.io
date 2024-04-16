// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let fishmarks = [];
let addMark = setInterval(makeMark, 1000);
// let back, one, two, three, four, five;
// let sound;
let imgset = [];
let scratches = [];

function preload() {
  sound = loadSound("sound.mp3");
  scratches[0] = loadSound("scratch1.mp3");
  scratches[1] = loadSound("scratch2.mp3");
  scratches[2] = loadSound("scratch3.mp3");

  back = loadImage("imgs/back.jpeg");
  f = loadImage("imgs/o-1.png");
  o1 = loadImage("imgs/o.png");
  o = loadImage("imgs/f.png");
  r = loadImage("imgs/r.png");
  s = loadImage("imgs/s.png");
  u = loadImage("imgs/u.png");
  imgset[0] = f;
  imgset[1] = o1;
  imgset[2] = o;
  imgset[3] = r;
  imgset[4] = s;
  imgset[5] = u;
  
  
}

let loadedImage = [];

function setup() {
  //createCanvas(756, 750);
  createCanvas(displayWidth, displayHeight);
  sound.play();
  sound.setLoop(true);

  //   for(let i = 0; i < 100; i++){
  //       let num = int(random(imgset.length));
  //       marks.push(new Mark(imgset[num]));

  //   }
  for(let i = 0; i < 10; i++){
    let num = int(random(imgset.length));
    fishmarks.push(new Mark(imgset[num], 550 + random(-50,50),900 + random(-50,50), 0));
  }
}

function draw() {
  //noCursor();

  background(255);
  image(back, 0, 0);

  for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
    if (marks[i].y > height + 10) {
      marks.splice(i, 1);
      scratches[int(random(3))].play();
    }
  }
  for (let i = 0; i < fishmarks.length; i++) {
    fishmarks[i].display();
    fishmarks[i].update();
  }
}
function makeMark() {
  let num = int(random(imgset.length));
  marks.push(new Mark(imgset[num], random(width),-50, random(1)));
}
function touchStarted() {
  userStartAudio();
}
