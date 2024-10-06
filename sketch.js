var viewportWidth  = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;

function preload(){
  img1 = loadImage("Dipper98_Logo.png")
}

function setup() {
  createCanvas(viewportWidth, viewportHeight);
}

function draw() {
  background(220);
  image(img1, 0, 0, 400, 400);
}
