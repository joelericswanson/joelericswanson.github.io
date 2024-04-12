
// https://ojack.xyz/PIXELSYNTH/

let marks = [];
let stars = [];
let back, star, peroid, one, two, three, four, five, six, apos, c, e, e2, h, i1, i2, i3, k, l, n, o, p, r, s, t, u, y;
let sound;

function preload() {
    sound = loadSound('sounds.mp3');
  back = loadImage('imgs/back.png');
 star = loadImage('imgs/star.png');
  star = loadImage('imgs/star.png');
  period = loadImage('imgs/period.png');
  one  = loadImage('imgs/1.png');
  two  = loadImage('imgs/2.png');
  three  = loadImage('imgs/3.png');
  four  = loadImage('imgs/4.png');
  five  = loadImage('imgs/5.png');
  six  = loadImage('imgs/6.png');
  apos  = loadImage('imgs/apos.png');
  c  = loadImage('imgs/c.png');
  e  = loadImage('imgs/e.png');
  e2  = loadImage('imgs/e2.png');
  h  = loadImage('imgs/h.png');
  i1  = loadImage('imgs/i.png');
  i2  = loadImage('imgs/i2.png');
  i3  = loadImage('imgs/i3.png');
  k  = loadImage('imgs/k.png');
  l  = loadImage('imgs/l.png');
  n  = loadImage('imgs/n.png');
  o  = loadImage('imgs/o.png');
  p  = loadImage('imgs/p.png');
  r  = loadImage('imgs/r.png');
  s  = loadImage('imgs/s.png');
  t  = loadImage('imgs/t.png');
  u  = loadImage('imgs/u.png');
  y  = loadImage('imgs/y.png');
 
}

let loadedImage = [];

function setup() {
  createCanvas(726, 1000);
  
  for(i = 0; i < 100; i++){
   stars.push(new Star());
  }

  sound.play();
  sound.setLoop(true);


  //marks.push(new Mark(star, 230, 666));
  marks.push(new Mark(period, 452, 556));
  marks.push(new Mark(one, 287, 100));
  //marks.push(new Mark(two, 287, 245));
  marks.push(new Mark(three, 285, 356));
  // marks.push(new Mark(four, 281, 590));
  // marks.push(new Mark(five, 280, 607));
  marks.push(new Mark(six, 270, 630));
  marks.push(new Mark(apos, 285, 345));
  marks.push(new Mark(c, 300, 560));
  marks.push(new Mark(e, 343, 344));
  marks.push(new Mark(e2, 232, 566));
  marks.push(new Mark(h, 240,204));
  marks.push(new Mark(i1, 258, 58));
  marks.push(new Mark(i2, 288, 200));
  marks.push(new Mark(i3, 343, 560));
  marks.push(new Mark(k, 369, 197));
  marks.push(new Mark(l, 400, 545));
  marks.push(new Mark(n, 321, 210));
 
  marks.push(new Mark(o, 207, 331));
  marks.push(new Mark(p, 187, 563));
  marks.push(new Mark(r, 314, 335));
  marks.push(new Mark(s, 135, 552));
  marks.push(new Mark(t, 145, 212));
  marks.push(new Mark(u, 255, 331));
  marks.push(new Mark(y, 170, 350));
  
}


function draw() {

  
  noCursor();
  imageMode(CORNERS);
  background(255);
   image(back, 0, 0);
  for(let i = 0; i < stars.length; i++){
    stars[i].move();
    stars[i].display();
  }
   for (let i = 0; i < marks.length; i++) {
    marks[i].display();
    marks[i].move();
  }
  
}

function makeMark(){
    marks.push(new Mark());
  	//console.log(marks.length);
}

