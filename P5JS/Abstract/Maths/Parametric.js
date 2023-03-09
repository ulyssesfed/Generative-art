let a = 100;
let t = 0;
let x = 500;
let y = 500;
let dt = 0.0001

function setup() {
  createCanvas(1000, 1000);
  background(200);
  
  for (let i = 0; i < 1000000; i++) {
    //if (t > 140){
    //  t = 0;
    //}
  
    //translate(2*a*cos(4*t) - a*cos(t) + 500, 2*a*sin(t) - a*cos(t) + 500);

    // let v = createVector(random(-100, 100), random(-100, 100));
  
    //v = p5.Vector.random2D();
    //v.mult(10);
    let del = 2*a*cos(4*dt*t) + a*cos(t) 
    strokeWeight(2);
    stroke(del,2*a*sin(t) - a*cos(3*dt*t) , 100, 10);
    point(2*a*sin(2*t*dt) + a*cos(t*dt) + 500, 2*a*sin(t*dt) - a*sin(5*t) + 500);
  
    t = t + 0.01;
    dt = dt + 0.1
  }
}

function draw() {
  
}
