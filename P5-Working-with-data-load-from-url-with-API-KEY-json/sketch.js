"use strict";

let weather, input;
const api_path = "http://api.openweathermap.org/data/2.5/weather?&q=";
const api_key = "&appid=73729444cfc122acacdc30e19e7b202d";
const units = "&units=metric";

function setup() {
  createCanvas(500, 500);

  // loadJSON(url, gotData);

  let submit_button = select("#submit");
  submit_button.mousePressed(getWeather);

  input = select("#city");
}

function gotData(data) {
    weather = data;
}

function getWeather() {
    let url = api_path + input.value() + api_key + units;
    loadJSON(url, gotData);
}

function draw() {
  background(0);
  if(weather) {
    let temperatureInCelcious = weather.main.temp;
    let humidity = weather.main.humidity;

    ellipse(100, 100, temperatureInCelcious, temperatureInCelcious);
    ellipse(300, 100, humidity, humidity);
  }
}
