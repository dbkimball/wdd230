// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidityElement = document.querySelector('#humidity');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=93b19be343e708d2c8cd63d952b6bee8";


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
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
    const humidityValue = weatherData.main.humidity;
    humidityElement.textContent = humidityValue;
    
}

apiFetch();

// const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=93b19be343e708d2c8cd63d952b6bee8";

// async function fetchWeatherForecast() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     const forecastDiv = document.getElementById('forecast');
//     forecastDiv.innerHTML = '<h2>3-Day Forecast:</h2>';

//     // Loop through the list of forecast data (each data represents a 3-hour interval for the next 3 days)
//     for (let i = 0; i < data.list.length; i++) {
//       const forecastData = data.list[i];

//       // Extract the necessary information for display (e.g., date, temperature, humidity, condition)
//       const date = new Date(forecastData.dt * 1000); // Convert Unix timestamp to JavaScript Date object
//       const temperature = forecastData.main.temp;
//       const humidity = forecastData.main.humidity;
//       const condition = forecastData.weather[0].description;

//       // Create a new forecast card element
//       const forecastCard = document.createElement('div');
//       forecastCard.classList.add('forecast-card');
//       forecastCard.innerHTML = `
//         <p>Date: ${date.toLocaleDateString()}</p>
//         <p>Temperature: ${temperature} °C</p>
//         <p>Humidity: ${humidity}%</p>
//         <p>Condition: ${condition}</p>
//       `;

//       forecastDiv.appendChild(forecastCard);
//     }
//   } catch (error) {
//     console.error('Error fetching weather forecast:', error);
//   }
// }

// // Call the function to fetch and display the weather forecast when the page is loaded
// window.addEventListener('DOMContentLoaded', fetchWeatherForecast);


