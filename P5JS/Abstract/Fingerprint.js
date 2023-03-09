
function setup() {
  createCanvas(600, 600)
  noiseSeed(12)
  noLoop()
}

function flowField(point) {
  const p = point.copy().sub(width/2, height/2)
  return createVector(
    p.y - p.x,
    -p.x - p.y,
  ).setMag(1.25).add(createVector(
    8*map(noise(point.x * -0.002, point.y * 0.002, 0),0,1,-1,1),
    8*map(noise(point.x * -0.002, point.y * 0.002, 200),0,1,-1,1),
  )).add(createVector(
    p.x * 0.01,
    -1,
  ).setMag(0.25)).normalize()
}

function lineWidth(point) {
  return 2 *
    map(noise(point.x * 0.005, point.y * 0.007, 630), 0.3, 0.6, 0, 1, true) *
    map(noise(point.x*0.5, point.y*0.6, 3000),0,1,0.75,1) *
    map(
      point.copy().sub(createVector(width/2, height/2)).mult(createVector(1, 0.75)).mag(),
      100, 150, 1, 0, true
    )
}

function drawLine(start) {
  const points = [start]
  const widths = [lineWidth(start)]
  const length = 200
  for (let i = 0; i < length; i++) {
    const t = (i+1) / (length)
    const wScale = 1 //Ease.easeOutCubic(1 - t)
    const prev = points[points.length - 1]
    const next = prev.copy().add(flowField(prev))
    if (next.x < 100 || next.x > 500 || next.y < 100 || next.y > 500) {
      break
    }
    points.push(next)
    widths.push(wScale * lineWidth(next))
  }
  if (points.length < 2) return
  
  const tangents = []
  for (let i = 1; i < points.length; i++) {
    tangents.push(points[i].copy().sub(points[i - 1]).normalize())
  }
  if (tangents.length > 0) tangents.push(tangents[tangents.length - 1])
  const normals = tangents.map((t) => createVector(t.y, -t.x))
  
  beginShape()
  for (let i = 0; i < points.length; i++) {
    const pt = points[i].copy().add(normals[i].copy().mult(widths[i]))
    vertex(pt.x, pt.y)
  }
  for (let i = points.length - 1; i >= 0; i--) {
    const pt = points[i].copy().add(normals[i].copy().mult(-widths[i]))
    vertex(pt.x, pt.y)
  }
  endShape(CLOSE)
}

function draw() {
  background('#f4f5da')
  fill('#bd3535')
  noStroke()
  blendMode(MULTIPLY)
  
  for (let i = 0; i < 400; i++) {
    drawLine(createVector(random(100, 500), random(150, 500)))
  }
  
  blendMode(BLEND)
  fill('#574e4e')
}
