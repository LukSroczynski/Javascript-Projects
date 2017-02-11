let x = 0;
let url = "http://api.open-notify.org/iss-now.json";
let iss_x, iss_y;

function setup() {
  // createCanvas(window.innerWidth, window.innerHeight);
    createCanvas(500, 500);
    loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
    iss_x = data.iss_position.longitude;
    iss_y = data.iss_position.latitude;
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