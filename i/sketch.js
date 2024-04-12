
// https://ojack.xyz/PIXELSYNTH/
// add sound when everyting is stacked over I

let marks = [];
//let addMark = setInterval(makeMark, 1000);

// let sound;

function preload() {
    sound = loadSound('sound.mp3');

  back = loadImage('imgs/back.png');
  e = loadImage('imgs/e.png');
  l = loadImage('imgs/l.png');
  m = loadImage('imgs/m.png');
  m2  = loadImage('imgs/m2.png');
  o  = loadImage('imgs/o.png');
  o2  = loadImage('imgs/o2.png');
  squiggle  = loadImage('imgs/squiggle.png');
  v  = loadImage('imgs/v.png');

  
 
}

let loadedImage = [];

function setup() {
  createCanvas(1000, 840);
  sound.play();
  sound.setLoop(true);

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
blendMode(BLEND);
  imageMode(CORNER)
  background(255);
   image(back, 0, 0);
  blendMode(MULTIPLY);
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
  imageMode(CENTER);
  image(squiggle, mouseX,mouseY)
}
function makeMark(){
  	// marks.push(new Mark(random(1)));
  	// //console.log(marks.length);
}

