
// https://ojack.xyz/PIXELSYNTH/
// add sound when everyting is stacked over I

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
  createCanvas(663, 900);
  sound.play();
  sound.setLoop(true);
  imgs.push(o);
  imgs.push(o2);
  imgs.push(o3);
  imgs.push(x);

}

function draw() {
  background(back);

 noCursor();

   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
}
function makeMark(){
  
  	marks.push(new Mark());
    if(marks.length > 1000){
      marks.splice(0,1);
      
    }
  
}

