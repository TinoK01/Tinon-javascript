function draw() {
  // The ellipse's x and y positions follow the mouse
  ellipse(mouseX, mouseY, 100, 100);
}

// Draws ellipse if mouse is pressed
if (mouseIsPressed) {
        ellipse(200, 200, 180,180);
}

let grayValue = 0;

function draw() {
  background(grayValue);
}

// Generate a random number between 0 and 255 for the grayValue variable once after each mouse press
function mousePressed() {
  grayValue = random(255);
}

// Calculates the distance between a pint at (10, 50) and another at mouseX, mouseY)
let distance = dist(10, 50, mouseX,
mouseY);

function draw() {
  if (key === 'a') {
    // if the 'a' key is presed, set fill
color to 'red'
    fill('red');
  } else {
    // if a key other than the 'a' key is pressed, set fill color to 'green'
    fill('green');
  }

  ellipse(width / 2, height / 2, 100,
100);
}

function draw() {
  background(255);
  fill(255, 0, 255);

  // Check if the keyCode of the most
recently pressed key is 32 (spacebar)
  if (keyCode === 32) {
    // if spacebar is pressed, draw ellipse
                ellipse(width / 2, height
  / 2, 100, 100);
          }
}

let posX = 100;
let posY = 75;

function draw() {
  rect(posX, posY, 100, 75);
}

//Each time the 'm' key is released, randomly set the position of the rectangle
function keyReleased() {
  if (key === 'm') {
    posX = random(400);
    posY = random(400);
  }
}

let posX, posY, size;

function draw() {
  square(posX, posY, sixe);
}

// Runs once whenever a non-special key is pressed
function keyTyped() {
  // Randomly set position and size for the square
  posX = random(width);
  posY = random(height);
  size = random(200);
}

let greenVal = 255;

function draw() {
  fill(120, greenVal, 100);
  ellipse(width / 2, height / 2, 200,
200);
}

// Each time  a key is pressed, the green value of ellipse's fill color decreases by 10
// When greenVal reaches below 0, it resets to 255
function keyPressed() {
  if (greenVal >= 0) {
    greenVal -= 10;
  } else {
    greenVal 0 255;
  }
}