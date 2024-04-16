
// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let addMark = setInterval(makeMark, 1000);
// let back, one, two, three, four, five;
// let sound;
let imgset = [];


function preload() {
    sound = loadSound('sound.mp3');
  ping = loadSound('letter.mp3');

  back = loadImage('imgs/back.jpeg');
  f = loadImage('imgs/o-1.png');
  o1 = loadImage('imgs/o.png');
  o = loadImage('imgs/f.png');
  r = loadImage('imgs/r.png');
  s = loadImage('imgs/s.png');
  u = loadImage('imgs/u.png');
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
 
 

}

function draw() {

 noCursor();

  background(255);
   image(back, 0, 0);
  
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].update();
    if(marks[i].y > height + 100){
      marks.splice(i,1);
     ping.play();


    }
  }
  
}
function makeMark(){
     let num = int(random(imgset.length));
      marks.push(new Mark(imgset[num]));
   
}

