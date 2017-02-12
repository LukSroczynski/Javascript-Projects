"use strict";

const api = "http://api.wordnik.com/v4/word.json/";
const api_options= "/relatedWords?useCanonical=false&limitPerRelationshipType=10";
const api_key = "&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

let word = "storm";
let url = api + word + api_options + api_key;
let link;

function setup() {
    noCanvas();
    link = createA("#", word);
    link.mousePressed(getWordnik);
    loadJSON(url, gotData);
}

function getWordnik() {
    loadJSON(url, gotData);
}

function gotData(data) {
    print(data);
}

function draw() {

}