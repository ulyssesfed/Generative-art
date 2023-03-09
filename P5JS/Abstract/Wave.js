
let x = [];
let y = [];
let o = [];
let gridSize = 60;
let space = 25;
let c1;
let c2;

function setup() 
{
	createCanvas(1000, 1000);
	c1 = color("#ff5714");
	c2 = color("#5603ad");
	let c = 0;
	for(let a = 0; a <= gridSize; a++)
	{
		for(let b = -space; b <= gridSize; b++)
		{
			x[c]=a*space;
			y[c]=b*space;
			o[c]=0;
			c++;
		}
	}
}

function distFromCircle(x,y,cx,cy,r)
{
	return sqrt((x-cx)*(x-cx) + (y-cy)*(y-cy)) - r;
}

function draw() 
{
	background(255);
	stroke("#007f5f");
	strokeWeight(5);
	
	let cx = width/2;
	let cy = height/2;

	for(let a = 0; a < gridSize*gridSize; a++)
	{
		let d = distFromCircle(x[a],y[a],cx,cy,frameCount*5);
		let s = sin(d*0.01);
		stroke(lerpColor(c1,c2,map(s,-1,1,0,1)));
		o[a] = s*50;
		strokeWeight(map(o[a],-50,50,space,5));
		point(x[a],y[a]+o[a]);
	}
}
