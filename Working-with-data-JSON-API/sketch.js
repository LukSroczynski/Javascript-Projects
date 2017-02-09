let data;

function preload() {
  data = loadJSON("data/birds.json");

}

function setup() {
  noCanvas();

  let bird = data.birds[1].members[2];

  createP(bird);
}
