"use strict";

// const full_path = "http://api.wordnik.com:80/v4/word.json/rain/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
// let url = api + word + api_options + api_key;
const api = "http://api.wordnik.com/v4/word.json/";
const api_options= "/relatedWords?useCanonical=false&limitPerRelationshipType=10";
const api_key = "&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

let word = "rainbow";
let link;

function setup() {
    noCanvas();
    link = createA("#", word);
    link.mousePressed(getWordnik);
}

function getWordnik() {
    loadJSON(api + word + api_options + api_key, gotData);
}

function gotData(data) {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));

    word = data[index1].words[index2];
    link.html(word);
}

function draw() {

}