let data;
let x = 0;
let spaceData;

function setup() {
  createCanvas(500, 500);
  loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(20);
  stroke(255);
  line(x, 0, x, height);
  x = x + 8;
  if (x > width) {
    x = 0;
  }

  if(spaceData) {
    for(let i = 0; i < spaceData.number; i++) {
      fill(255);
      ellipse(random(width), random(height), 8, 8);
    }
  }
}