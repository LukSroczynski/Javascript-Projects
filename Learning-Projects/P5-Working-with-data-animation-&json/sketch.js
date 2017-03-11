"use strict";

const url = "http://api.open-notify.org/iss-now.json";
let x=0, iss_x=0, iss_y=0;

function setup() {
  // createCanvas(window.innerWidth, window.innerHeight);
    createCanvas(500, 500);
    loadJSON(url, gotData, "jsonp");
    setInterval(doISS, 2000);
}

function doISS() {
    loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
    let long = data.iss_position.longitude;
    let lat = data.iss_position.latitude;

    iss_x = map(lat, -180, 180, 0, width);
    iss_y = map(long, -180, 180, 0, width);
}

function draw() {
    background(10);

    fill(255);
    ellipse(iss_x, iss_y, 24, 24);

    verticalMovingLine(8);
}

function verticalMovingLine(speed) {
    stroke(255);
    line(x, 0, x, height);
    x = x + speed;
    if (x > width) {
        x = 0;
    }
}