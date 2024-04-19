
let marks = [];
//let addMark = setInterval(makeMark, 1000);
let theta = 0;
let factor = 50;

// let sound;

function preload() {
  sound = loadSound("sound.mp3");
  back = loadImage("imgs/back.png");
  e = loadImage("imgs/e.png");
  l = loadImage("imgs/l.png");
  m = loadImage("imgs/m.png");
  m2 = loadImage("imgs/m2.png");
  o = loadImage("imgs/o.png");
  o2 = loadImage("imgs/o2.png");
  squiggle = loadImage("imgs/squiggle.png");
  v = loadImage("imgs/v.png");
}

let loadedImage = [];

function setup() {
  createCanvas(600, 800);
 // sound.play();
  sound.setLoop(true);
  factor = int(random(30, 150));

  marks.push(new Mark(e));
  marks.push(new Mark(l));
  marks.push(new Mark(m));
  marks.push(new Mark(m2));
  marks.push(new Mark(o));
  marks.push(new Mark(o2));
  marks.push(new Mark(v));
}

function draw() {
  noCursor();
  background(back);
  
  
  blendMode(DARKEST);
  tint(255, 200)
  image(back, width/2, height/2);
  imageMode(CENTER)

 


  
  for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
  imageMode(CENTER);
  for (let x = 50; x < width; x += factor) {
    for (let y = 50; y < height; y += factor) {
      push();
      translate(x, y);
      scale(random(0.1));
      //tint(255, 10)
      rotate((theta * (x + y)) / factor);

      image(squiggle, 0, 0);
      pop();
    }
  }

  // factor = map(mouseX, 0, 100, 150, 500);
  theta += 0.001;
}
function makeMark() {
  // marks.push(new Mark(random(1)));
  // //console.log(marks.length);
}
function touchStarted() {
  userStartAudio();
}
