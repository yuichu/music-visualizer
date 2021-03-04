let music;

// preload music
function preload() {
	music = loadSound('assets/royalty-free-music.mp3'); //Royalty free music from https://www.zapsplat.com
}

function setup() {
	createCanvas(displayWidth, displayHeight);
}

// draw shape to screen
function draw() {
	background(46,33,67);
	fill(253,55,119);
	ellipse(50,50,80,80);
}