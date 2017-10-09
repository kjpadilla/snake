var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// fillrect(x, y, width, height);
c.fillRect(100,100,100,100);

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(51);
}