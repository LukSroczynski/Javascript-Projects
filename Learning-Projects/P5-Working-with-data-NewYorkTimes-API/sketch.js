"use strict";

const full_path = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a71f390f65fc4098a3951f033e50f3ed&q=home";
// let url = api + word + api_options + api_key;

const api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
let api_options= "home";
const api_key = "api-key=a71f390f65fc4098a3951f033e50f3ed&q=";

let url = api + api_key + api_options;

function setup() {
    noCanvas();
    loadJSON(full_path, gotData);
}

function gotData(data) {

    let articles = data.response.docs;

    for(let i = 0; i < articles.length; i++) {
        createP(articles[i].snippet);
        createElement("h1", articles[i].headline.main);
    }
}

function draw() {

}