"use strict";
//I would not reveal this api key if it was important;
const key = "6b97119aabe539419812d093ed6176e7";
const inputBox = document.querySelector("input");
//object to hold all the information that I will display
let info = {
  location: "New York",
  description: "Sunny",
  temperature: 50,
  wind: 5,
  humidity: 50,
};

getNewFranklin();

async function getNewFranklin() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=new%20franklin&appid=" +
      key
  );

  const data = await response.json();

  info.location = "New Franklin";
  info.description = data.weather[0].description;
  info.temperature = convertKelvin(data.main.temp);
  info.wind = data.wind.speed + " mph";
  info.humidity = data.main.humidity + "%";

  displayWeather();
}

async function getWeather() {
  console.log(info);
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputBox.value +
      "&appid=" +
      key
  );
  const data = await response.json();

  info.location = inputBox.value;
  info.description = data.weather[0].description;
  info.temperature = convertKelvin(data.main.temp);
  info.wind = data.wind.speed + " mph";
  info.humidity = data.main.humidity + "%";
  console.log(info);
  displayWeather();
}

function displayWeather() {
  console.log(info);
  const description = document.querySelector(".description");
  const location = document.querySelector(".location");
  const temperature = document.querySelector(".temperature");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  //clear out previous content
  description.textContent = "";
  location.textContent = "";
  temperature.textContent = "";
  wind.textContent = "";
  humidity.textContent = "";
  //add new content
  description.textContent = info.description;
  location.textContent = info.location;
  temperature.innerHTML = info.temperature + "<span>&#176;F</span>";
  wind.textContent = info.wind;
  humidity.textContent = info.humidity;
}

function convertKelvin(temp) {
  const fahrenheit = Math.floor(1.8 * (temp - 273) + 32);
  return fahrenheit;
}

//inputBox.addEventListener("blur", displayWeather);

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});
