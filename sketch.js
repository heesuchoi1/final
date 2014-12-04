var song, analyzer;

function preload() {
  song = loadSound("./cheese.mp3");
}

function setup() {
  createCanvas(710, 200);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  background(255);
  var vol = analyzer.getLevel();
  fill(127);
  stroke(0);
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}
