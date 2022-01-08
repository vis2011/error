var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,allPlayers,school;
var schoolCount;
var gline,grline;
var home
function preload() {
  backgroundImage = loadImage("download.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  home = new homePage();
  home.display();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
