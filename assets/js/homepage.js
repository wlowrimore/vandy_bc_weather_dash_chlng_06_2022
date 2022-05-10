var searchCity = $("#search-city");
var searchButton = $("#search-button");
var searchedCity = $("#searched-city");
var clearHistory = $("#clear-history");

var currentCity = $("#current-city");
var currentTemp = $("#current-temp");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind");
var UVindex = $("#uv-index");

var weatherInfo = $("#weather-info");

const APIkey = "72b0d0feee078a3029d066a05697d81b";

var cityList = [];

// var getCurrentWeather = function(data) {
//   var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={}&appid={72b0d0feee078a3029d066a05697d81b}"
// }
