var song, analyzer;

function preload() {
  song = loadSound("./cheese.mp3");
}

function setup() {
  createCanvas(600, 300);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  background(255);
  var vol = analyzer.getLevel();
  fill(255,74,74);
  stroke(255);
  ellipse(100, 150, 10+vol*200, 10+vol*200,10);
  fill(182,239,44);
  rect(200, 150, vol*200, 50+vol*200,80);
}
