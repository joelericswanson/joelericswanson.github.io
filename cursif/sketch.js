
// https://ojack.xyz/PIXELSYNTH/

let marks = [];

let es = [];
let addMark = setInterval(makeMark, 100);
let back, one, two, three, four, five;
let sound;

function preload() {
   sound = loadSound('sound.mp3');
  back = loadImage('imgs/back.jpg');
  one = loadImage('imgs/1.png');
  two = loadImage('imgs/2.png');
  three = loadImage('imgs/3.png');
  four  = loadImage('imgs/4.png');
  five  = loadImage('imgs/5.png');
   six  = loadImage('imgs/6.png');
 
}

let loadedImage = [];

function setup() {
  createCanvas(952, 722);
  sound.play();
  sound.setLoop(true);

  
  //marks.push(new Mark(one, 200,300));
  marks.push(new Mark(two, 300,300));
  marks.push(new Mark(three,400,300));
  marks.push(new Mark(four, 410,200));
  marks.push(new Mark(five, 500,200));
  marks.push(new Mark(six, 350,500));
 

}

function draw() {

 noCursor();

  background(255);
   image(back, 0, 0);
  
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].move();
  }
  
   for (let i = 0; i < es.length; i++) {
    es[i].display();
    es[i].move();
  }
//   for(let i = 0; i < 100; i++){
//     tran
    
//   }
  //marks[4].r += 0.001;
  
}

function makeMark(){
    es.push(new Mark(one, 50+ random(900),300));
  	 if(es.length > 100){
      es.splice(0,1);
      
    }
}

function mouseMoved() {
   let newe = random(height);
   for (let i = 0; i < es.length; i++) {
    es[i].y = newe;
  
  }
}


