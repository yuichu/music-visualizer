let music, amplitude;

// preload music
function preload() {
	music = loadSound('assets/royalty-free-music.mp3'); //Royalty free music from https://www.zapsplat.com
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	amplitude = new p5.Amplitude();
}

// draw shape to screen
function draw() {
	background(46,33,67);
	
	let level = amplitude.getLevel();
	let size = map(level, 0, 1, 10, 400);
	
	fill(253,55,119);
	ellipse(50,50,size,size);
}

// play music on mouse click
function mousePressed() {
	if (music.isPlaying()){
		music.stop()
	}
	else {
		music.play()
	}
}