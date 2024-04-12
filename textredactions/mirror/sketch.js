// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let imgs = [];
let back, x;
// let addMark = setInterval(makeMark, 200);
let theta = 0;

// let sound;

function preload() {
  sound = loadSound('sound.mp3');
   back = loadImage('imgs/back.png')
   //x = loadImage('imgs/x.png')
  imgs[0] = loadImage('imgs/dot.png');
  imgs[1] = loadImage('imgs/e.png');
  imgs[2] = loadImage('imgs/j.png');
  imgs[3] = loadImage('imgs/l.png');
  imgs[4] = loadImage('imgs/o.png');
  

}

function setup() {
  createCanvas(1000, 640);
  sound.play();
  sound.setLoop(true);
  

}

function draw() {
  imageMode(CORNERS)
  background(back);
  imageMode(CENTER);

  noCursor();

   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
  }
//   push();
//   translate(mouseX, mouseY);
//   rotate(theta);
//   image(x, 0, 0);
//   pop();
//   if(mouseX > width/2){
//     theta += random(0.001);
//   } else {
//      theta -= random(0.001);
//   }
}
// function makeMark(){
  
//   	marks.push(new Mark());
//     if(marks.length > 1000){
//       marks.splice(0,1);
      
//     }
  
// }
function mousePressed(){
 
  	marks.push(new Mark());
    if(marks.length > 1000){
      marks.splice(0,1);
      
    }
 
}

