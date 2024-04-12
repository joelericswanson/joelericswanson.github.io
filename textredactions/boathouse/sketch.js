
// https://ojack.xyz/PIXELSYNTH/

let marks = [];
// let addMark = setInterval(makeMark, 1000);
// let back, one, two, three, four, five;
// let sound;

function preload() {
    sound = loadSound('sound.mp3');

  back = loadImage('imgs/back.jpeg');
  o = loadImage('imgs/o.png');
  f = loadImage('imgs/f.png');

  
 
}

let loadedImage = [];

function setup() {
  createCanvas(509, 700);
  sound.play();
  sound.setLoop(true);

  for(let i = 0; i < 100; i++){
    if(i%2){
      marks.push(new Mark(o));
    } else {
       marks.push(new Mark(f));
    }
  }
 
 

}

function draw() {

 noCursor();

  background(255);
   image(back, 0, 0);
  
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
  
}
function makeMark(){
    marks.push(new Mark(one, 200 + random(-5,5),300 + random(-5,5)));
  	//console.log(marks.length);
}

