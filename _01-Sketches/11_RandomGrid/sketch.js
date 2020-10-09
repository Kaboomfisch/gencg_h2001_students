
// Global var
var tileCount, actRandomSeed, actStrokeCap;


function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Colors and drawing modes
  smooth();
  // Init Var
  tileCount = 20;
  actRandomSeed = 0;
  actStrokeCap = ROUND;
  z = 0
  q = width / tileCount
  g = width / tileCount / 2

  shapes = [
    quad(0, 0, 0, width / tileCount, width / tileCount, width / tileCount, width / tileCount, 0),
    ellipse(g, g, g, g),
    triangle(0, 0, width / tileCount, 0, 0, width / tileCount),
    triangle(width / tileCount, width / tileCount, width / tileCount, 0, 0, width / tileCount),
    quad(width / tileCount / 2, 0, width / tileCount, width / tileCount / 2, width / tileCount / 2, width / tileCount, 0, width / tileCount / 2)
  ];

  vertex = [
    z, q
  ]

  colors = [
    color(100, 232, 82),
    color(241, 82, 59),
    color(101, 101, 255),
    color(208, 108, 198)
  ];


}

function draw() {
  // Canvas draw options
  background(250, 200, 100);

  smooth();
  noFill();

  // Stroke options
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = width / tileCount * gridX;
      let posY = width / tileCount * gridY;


      push()
      stroke(0)
      strokeWeight(10)
      strokeJoin(ROUND)
      translate(posX, posY)
      fill(random(colors))
      quad(0, 0, 0, width / tileCount, width / tileCount, width / tileCount, width / tileCount, 0)


      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))
      fill(random(colors))
      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))
      fill(random(colors))
      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))
      fill(random(colors))
      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))
      fill(random(colors))
      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))
      fill(random(colors))
      quad(random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex), random(vertex))

      pop()

    }

  }
}

function mousePressed() {
  actRandomSeed = toInt(random(100000));
}

function keyPressed() {
  if (key == 's' || key == 'S') saveThumb(650, 350);
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}

// Tools

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}

// Int conversion
function toInt(value) {
  return ~~value;
}

// Timestamp
function timestamp() {
  return Date.now();
}

// Thumb
function saveThumb(w, h) {
  let img = get(width / 2 - w / 2, height / 2 - h / 2, w, h);
  save(img, 'thumb.jpg');
}

