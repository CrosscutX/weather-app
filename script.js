"use strict";
//I would not reveal this api key if it was important;
const key = "6b97119aabe539419812d093ed6176e7";
const inputBox = document.querySelector("input");
console.log(inputBox);
//object to hold all the information that I will display
let info = {
  location: "New York",
  description: "Sunny",
  temperature: 50,
  wind: 5,
  humidity: 50,
};

function getLocation() {}

function getDescription() {}

function getTemp() {}

function getWind() {}

function getHumidity() {}

function displayWeather() {
  console.log("in");
}

//inputBox.addEventListener("blur", displayWeather);

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    displayWeather();
  }
});
