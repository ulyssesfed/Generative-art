
const W = 1024;
const M = W/2;
const MR = 92;
const MAX_LEN = M-MR;
const T_MAX_LEN = MAX_LEN*0.1;
const MAX_STROKE_LEN = MAX_LEN-T_MAX_LEN;
let strokes = [];
let mainRotation = 0;
let bgColor;
let hue;

function setup() {
  createCanvas(W, W);
  colorMode(HSL);
  hue = floor(random()*360);
  bgColor = color(`hsl(${hue}, 50%, 9%)`);
  for (let angle = 0; angle < 360; angle += 2) {
    const len = floor(random()*MAX_STROKE_LEN)+T_MAX_LEN;
    const x1 = 0;
    const y1 = 0;
    const _stroke = new Stroke(x1, y1, angle, len, hue);
    strokes.push(_stroke);
  }
}

function draw() {
  push();
  background(bgColor);
  translate(M, M);
  rotate(mainRotation);
  for (let i = 0; i < strokes.length; i++) {
    strokes[i].update();
    strokes[i].draw();
  }
  mainRotation += 0.002;
  if (mainRotation >= 360) {
    mainRotation = 0;
  }
  pop();
}

class Stroke {
  constructor(x1, y1, angle, len, hue) {
    this.x1 = x1;
    this.y1 = y1;
    this.angle = angle;
    this.len = len;
    this.lenMod = 1;
    this.hue = hue;
    this.initCols();
  }
  
  initCols() {
    this.col1 = color(`hsla(${this.hue}, 50%, 50%, 0.8)`);
    this.col2 = color(`hsla(${this.hue}, 50%, 50%, 0.382)`);
  }
  
  _calcEndPos() {
    this.x2 = this.len*cos(radians(this.angle));
    this.y2 = this.len*sin(radians(this.angle));
  }
  
  update() {
    this.len += this.lenMod;
    if (this.len > MAX_STROKE_LEN) {
      this.len = MAX_STROKE_LEN;
      this.lenMod *= -1;
    } else if (this.len < T_MAX_LEN) {
      this.len = T_MAX_LEN;
      this.lenMod *= -1;
    }
    this._calcEndPos();
  }
  
  draw() {
    push();
    noFill();
    stroke(this.col2);
    strokeWeight(2);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
    push();
    fill(this.col1);
    noStroke();
    circle(this.x1, this.y1, 4);
    circle(this.x2, this.y2, 4);
    pop();
  }
}

function keyPressed() {
  switch (keyCode) {
    case 32: // SPACE
      hue = floor(random()*360);
      bgColor = color(`hsl(${hue}, 50%, 9%)`);
      for (let i = 0; i < strokes.length; i++) {
        strokes[i].hue = hue;
        strokes[i].initCols();
      }
      break;
    default: break;
  }
  return false;
}
