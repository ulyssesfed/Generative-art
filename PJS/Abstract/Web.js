int n = 200;
float delta;
float factor = 0;
float factorIncrement = 0.01; // amount to increment factor each frame

void setup() {
  size(600, 600);
  delta = 2 * PI / n;
}

void draw() {
  background(50);
  translate(width / 2, height / 2);
  stroke(30);
  strokeWeight(3);
  noFill();
  ellipse(0, 0, 400, 400);
  stroke(240);
  strokeWeight(5);
  for (int i = 0; i < n; i++) {
    point(200 * cos(i * delta), 200 * sin(i * delta));
    strokeWeight(1);
    line(200 * cos(i * delta), 200 * sin(i * delta), 200 * cos(factor * i * delta), 200 * sin(factor * i * delta));
  }
  
  // increment factor each frame
  factor += factorIncrement;
  
  // stop animation when factor reaches 12
  if (factor >= 12) {
    factor = 12;
    noLoop(); // stop the draw() function from looping
  }
}
