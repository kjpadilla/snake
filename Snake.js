document.addEventListener("keydown", keyPush);
var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = 400;
canvas.height = 400;

var c = canvas.getContext('2d');
setInterval(game, 1000/15);

xv=yv=0;
px=py=10;
gs=tc=20;
ax=ay=15;

trail = [];
tail = 5;

function game() {
	px += xv;
	py += yv;

	if (px < 0) {
		px = tc - 1;
	}
	if (px > tc - 1) {
		px = 0;
	}
	if (py < 0) {
		py = tc - 1;
	}
	if (py > tc - 1) {
		py = 0;
	}

	c.fillStyle = 'black';
	c.fillRect(0,0,canvas.width, canvas.height);

	c.fillStyle = 'lime';
	for (var i = 0; i < trail.length; i++) {
		c.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2, gs-2);
		if (trail[i].x == px && trail[i].y == py ) {
			tail = 5;
		}
	}

	trail.push({x:px, y:py});
	while (trail.length>tail) {
		trail.shift();
	}

	if (ax == px && ay == py ) {
			tail++;
			ax=Math.floor(Math.random()*tc);
			ay=Math.floor(Math.random()*tc);
	}

	c.fillStyle = 'red';
	c.fillRect(ax*gs,ay*gs,gs-2, gs-2);
}

function keyPush(evt) {
	switch (evt.keyCode) {
		case 37:
		xv = -1; yv = 0;
		break;
		case 38:
		xv = 0; yv = -1;
		break;
		case 39:
		xv = 1; yv = 0;
		break;
		case 40:
		xv = 0; yv = 1;
		break;
	}
}

// fillrect(x, y, width, height);
c.fillStyle = 'rgba(255,0,0,.6)';
c.fillRect(100,100,100,100);

c.fillStyle = 'rgba(0,255,0,0.6)';
c.fillRect(300,100,100,100);

c.fillStyle = 'rgba(0,0,255,0.6)';
c.fillRect(500,100,100,100);


//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = '#fa34a3';
c.stroke();

//arc
c.beginPath();
c.arc(150,300,100,0,2*Math.PI);
c.strokeStyle = 'red';
c.stroke();

//random = Math.random() between 0 and 1? Supposedly
