var song, analyzer;
var r, g, b;

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
    fill(255);
    textSize(15);
    textFont("Helvetica");
    text("If you click the circle, then it will changes", 130, 250);
}

