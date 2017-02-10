let data;

function preload() {
  data = loadJSON("../data/birds.json");
}

function setup() {

  let birds = data.birds;

  for (let i = 0; i < birds.length; i++) {
    createElement("h1", birds[i].family);
    let members = birds[i].members;
    for (let j = 0; j < members.length; j++) {
      createDiv(members[j]);
    }
  }
}
