/**
 * Created by Surreallistic on 13.02.2017.
 */

const city_url = "http://ip-api.com/json";
const weather_url = "http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1";
const weather_key = "&appid=73729444cfc122acacdc30e19e7b202d";
let lat;
let long;


$( document ).ready(function() {
    $.getJSON("http://ip-api.com/json", getCity);
    $.getJSON(weather_url + weather_key, getDegress);

});

function getCity(data) {
    $("#hexagon-text-city").html(data.city);
}

function getDegress(data) {
    // $("#hexagon-text-city").html(data.city);
}