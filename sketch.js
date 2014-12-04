var song, analyzer;
var r, g, b;
var dir1=1;

function preload() {
  song = loadSound("./cheese.mp3");
}

function setup() {
  createCanvas(600, 300);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
    r = random(255);
    g = random(255);
    b = random(255);

}

function draw() {
  var x;
  x=10;

  background(131,210,222);
  var vol = analyzer.getLevel();
  strokeWeight(2);
  stroke(255);
  fill(r, g, b, 127);
  ellipse(width/2, height/2, 120+vol*200, 120+vol*200)
  stroke(255);
  fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
  ellipse(width/2, height/2, 90+vol*500, 90+vol*500);
  fill(r,g,b,150);
  ellipse(width/2, height/2, 50+vol*200, 50+vol*200);
  fill(255,74,74);
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
  noFill();
  ellipse(width/2, height/2, 130+vol*600, 130+vol*600);
  word();
  drawSnow();


    

}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 300) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }


}

function word(){
    fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
    stroke(255);
    textSize(20);
    textFont("Helvetica");
    text("If you click the circle, then it will changes", 130, 250);
}

function drawSnow(){
  var r=Math.random();
  stroke(255,255,255,128);
  strokeWeight(20);

  fill(255);
  ellipse(700,dir1,50,50);
  ellipse(100,dir1+80,20,20);
  ellipse(200,dir1+r,30,30);
  ellipse(300,dir1+90,25,25);
  ellipse(400,dir1+100,20,20);
  ellipse(500,dir1+80,34,34);
  ellipse(600,dir1+270,47,47);
  ellipse(800,dir1+180,25,25);
  ellipse(900,dir1+210,34,34);
  ellipse(1000,dir1+230,17,17);
  ellipse(1100,dir1+130,28,28);
  ellipse(1200,dir1+150,33,33);
  ellipse(1300,dir1+80,50,50);
  ellipse(1400,dir1+260,27,27);
  ellipse(1500,dir1+200,35,35);
    dir1=dir1+3;     
    if(dir1>300){
     dir1=-300;
 }

}