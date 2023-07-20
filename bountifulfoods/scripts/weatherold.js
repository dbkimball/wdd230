
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const conditions = document.getElementById("conditions");
const humidity = document.getElementById("humidity");
const forecast = document.getElementById("forecast");


const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=93b19be343e708d2c8cd63d952b6bee8";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=93b19be343e708d2c8cd63d952b6bee8";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const temperature = data.main.temp;
        currentTemp.textContent = temperature;
        const conditions = data.weather[0].description;
        conditions.textContent = conditions;
        const humidity = data.main.humidity;
        humidity.textContent = "Humidity: " + humidity + "%";
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  async function displayResults(weatherData){
    let temp = weatherData.main.temp.toFixed(0);
    let speed = weatherData.wind.speed.toFixed(0);
    

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    document.getElementById("temperature").innerHTML = temp;
    
}

async function fetchForecastData() {
    try {
      const response = await fetch(forecastUrl);
      if (response.ok) {
        const data = await response.json();
        const forecastList = data.list;
  
        const currentDate = new Date();
        const nextDates = [
          new Date(currentDate.getTime() + 24 * 60 * 60 * 1000),
          new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000),
          new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000),
        ];
  
        forecastElement.innerHTML = "";
  
        let forecastDates = [];
        forecastList.forEach((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000);

          if (
            nextDates.some((date) => date.toDateString() === forecastDate.toDateString()) &&
            !forecastDates.includes(forecastDate.toDateString())
          ) {
            const temperature = forecast.main.temp;
            const humidity = forecast.main.humidity;
            const conditions = forecast.weather[0].description;
            const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const desc = weatherData.weather[0].description;

            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = desc;
  
            const forecastItem = document.createElement("div");
            forecastItem.classList.add("forecast-item");
  
            const dateElement = document.createElement("p");
            dateElement.classList.add('forecast-1');
            dateElement.textContent = forecastDate.toDateString();
            forecastItem.appendChild(dateElement);
  
            const temperatureElement = document.createElement("p");
            temperatureElement.classList.add('forecast-1');
            forecastItem.appendChild(currentTemp);
  
            const humidityElement = document.createElement("p");
            humidityElement.classList.add('forecast-1');
            humidityElement.textContent = `Humidity: ${humidity}%`;
            forecastItem.appendChild(humidity);
  
            const conditionsElement = document.createElement("p");
            conditionsElement.classList.add('forecast-1');
            conditionsElement.textContent = conditions;
            forecastItem.appendChild(conditions);
  
            const iconElement = document.createElement("img");
            iconElement.src = iconUrl;
            iconElement.alt = conditions + " images";
            forecastItem.appendChild(weatherIcon);
  
            forecastElement.appendChild(forecastItem);
  
            forecastDates.push(forecastDate.toDateString());
          }
        });
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  
  
  
  fetchWeatherData();
  fetchForecastData();

apiFetch();
