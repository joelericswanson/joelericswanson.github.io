// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let imgs = [];
let back;
let addMark = setInterval(makeMark, 1000);
let rot = 0;

// let sound;

function preload() {
  sound = loadSound('sound.mp3');
   back = loadImage('imgs/back.png')
   spider = loadImage('imgs/spider.png')

  imgs[0] = loadImage('imgs/1.png');
  imgs[1] = loadImage('imgs/2.png');
  imgs[2] = loadImage('imgs/k.png');
  imgs[3] = loadImage('imgs/m.png');
 
}

function setup() {
  createCanvas(600, 800);
  sound.play();
  sound.setLoop(true);
  

}

function draw() {
  imageMode(CORNERS)
  background(back);


  noCursor();
    strokeWeight(0.5);
  stroke(0,100);

   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
    line(marks[i].x, marks[i].y, 500, 230);
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
 push();
  imageMode(CENTER);
  translate(500,230);

  rotate(rot);
  image(spider,0,0);
  rot += (random(-0.001, 0.01));
  pop();
  
}


function makeMark(){  
  	marks.push(new Mark());
    if(marks.length > 100){
      marks.splice(0,1);
      
    }
  
}
function mousePressed(){
 
  	marks.push(new Mark());
    if(marks.length > 1000){
      marks.splice(0,1);
      
    }
 
}
function touchStarted() {
  userStartAudio();
}


