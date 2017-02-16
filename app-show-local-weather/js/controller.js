/**
 * Created by Surreallistic on 13.02.2017.
 */
"use strict";

const city_url = "http://ip-api.com/json";
const weather_url = "http://api.openweathermap.org/data/2.5/weather?";
const weather_key = "&appid=73729444cfc122acacdc30e19e7b202d";
const weather_options = "&units=metric";
const weather_lat = "lat=";
const weather_long = "&lon=";
const icon = "http://openweathermap.org/img/w/";

let lat;
let long;


$( document ).ready(function() {
    $.getJSON("http://ip-api.com/json", getCity);
});

function getDegress(data) {

    $("#hexagon-text-degress").html(Math.ceil(data.main.temp) + "°C");

    let weather = data.weather[0].main;

    switch (weather) {

        case "Dizzle":
            getIcon(data);
            break;
        case "Clouds":
            getIcon(data);
            break;
        case "Rain":
            getIcon(data);
            break;
        case "Snow":
            getIcon(data);
            break;
        case "Clear":
            getIcon(data);
            break;
        case "Thunderstom":
            getIcon(data);
            break;
        default:
            getIcon(data);
    }
}

function getIcon(data) {
    $('#hexagon-text-icon').prepend("<img src=" + icon + data.weather[0].icon + ".png" + "" + " />");
}

function getCity(data) {
    $("#hexagon-text-city").html(data.city);
    lat = data.lat;
    long = data.lon;
    $.getJSON(weather_url + weather_lat + lat + weather_long + long + weather_key + weather_options, getDegress);
}