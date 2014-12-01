var song;

function setup(){
	song = loadSound('soran-cheese.mp3');
	createCanvas(800,800);
	backgound(255);
}

function mousePressed(){
	if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}