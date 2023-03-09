int maxIterations = 100;
int minIterations = 10;
float x1 = -2.5;
float x2 = 2.5;
float y1 = -2.5;
float y2 = 2.5;

void setup() {
size(500, 500);
noStroke();
colorMode(HSB, 255);
background(0);
}

void draw() {
loadPixels();
for (int x = 0; x < width; x++) {
for (int y = 0; y < height; y++) {
float a = map(x, 0, width, x1, x2);
float b = map(y, 0, height, y1, y2);
float ca = a;
float cb = b;
int n = 0;
while (n < maxIterations) {
  float aa = a * a - b * b;
  float bb = 2 * a * b;
  a = aa + ca;
  b = bb + cb;
  if (abs(a + b) > 16) {
    break;
  }
  n++;
}

float hue = map(n, minIterations, maxIterations, 0, 255);
pixels[x + y * width] = color(hue, 255, 255);
}
}
updatePixels();
}

void mouseDragged() {
x1 += (pmouseX - mouseX) * 0.01;
x2 += (pmouseX - mouseX) * 0.01;
y1 += (pmouseY - mouseY) * 0.01;
y2 += (pmouseY - mouseY) * 0.01;
redraw();
}

void mouseClicked() {
float x3 = (x1 + x2) / 2;
float y3 = (y1 + y2) / 2;
x1 = x3 + (x1 - x3) * 0.5;
x2 = x3 + (x2 - x3) * 0.5;
y1 = y3 + (y1 - y3) * 0.5;
y2 = y3 + (y2 - y3) * 0.5;
redraw();
}
