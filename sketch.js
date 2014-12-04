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
  background(131,210,222);
  var vol = analyzer.getLevel();
  stroke(255);
  fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
  ellipse(width/2, height/2, 90+vol*500, 90+vol*500);
  fill(182,239,44);
  ellipse(width/2, height/2, 50+vol*200, 50+vol*200);
  fill(255,74,74);
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}

