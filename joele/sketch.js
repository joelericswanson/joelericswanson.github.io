// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let rline;
// let addMark = setInterval(makeMark, 1000);
// let back, one, two, three, four, five;
// let sound;

function preload() {
   sound = loadSound('sound.mp3');
  rline = loadImage("imgs/line.png");
  back = loadImage("imgs/back.png");
  dot = loadImage("imgs/dot.png");
  dot2 = loadImage("imgs/dot2.png");
  e = loadImage("imgs/e.png");
  e2 = loadImage("imgs/e2.png");
  j = loadImage("imgs/j.png");
  l = loadImage("imgs/l.png");
  o = loadImage("imgs/o.png");
}

let loadedImage = [];

function setup() {
  createCanvas(665, 900);
  sound.play();
  sound.setLoop(true);

  marks.push(new Mark(dot, 400, 450));
  marks.push(new Mark(dot2, 550, 350));
  marks.push(new Mark(e, 300, 320));
  marks.push(new Mark(e2, 450, 250));
  marks.push(new Mark(j, 100, 300));
  marks.push(new Mark(l, 350, 220));
  marks.push(new Mark(o, 200, 350));
}

function draw() {
 

  background(255);
  imageMode(CORNER);
  noCursor();
  image(back, 0, 0);
 // image(rline, 100, map(mouseX, 0, width, 0, height));


  for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }

  function makeMark() {
    marks.push(new Mark(one, 200 + random(-5, 5), 300 + random(-5, 5)));
    //console.log(marks.length);
  }
}
