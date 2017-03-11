"use strict";

let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    // createCanvas(500, 500);
}

function draw() {

    background(r, g, b);
    fill(mouseX, mouseY, 0);

    let ellipseX = mouseX;
    let ellipseY = mouseY;

    ellipse(ellipseX, ellipseY, ellipseX/3, ellipseX/3);

    r = map(mouseX, 0, window.innerWidth, 0, 255);
    g = map(mouseY, 0, window.innerWidth, 255, 0);
    b = map(mouseY, 0, window.innerWidth, 0, 0);

}
