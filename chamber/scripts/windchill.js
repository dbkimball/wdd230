// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=San Tan Valley, AZ,&units=imperial&wind-speed&appid=93b19be343e708d2c8cd63d952b6bee8";

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

function windChill(temp, speed){
    // check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
    if (temperature <=50 && windSpeed >3){
        let windChill = 35.74 + 0.6215*temp - 35.75*(speed**0.16) + 0.4275*(temp*speed**0.16);
        console.log(windChill);
        document.getElementById('windChill').innerHTML=Math.round(windChill);
    }
    else{
        document.getElementById('windChill').innerHTML ='N/A';
    }
}
async function displayResults(weatherData){
    let temp = weatherData.main.temp.toFixed(0);
    let speed = weatherData.wind.speed.toFixed(0);
    
    // currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    document.getElementById("temperature").innerHTML = temp;
    document.getElementById("windSpeed").innerHTML = "Wind Speed: " + speed + " mph";

    windChill(temp,speed);
}

apiFetch();

// //Get the two input values of temp and wind speed
// let temperature = document.getElementById('temperature').innerText;
// let temp = Number(temperature);

// let windSpeed = document.getElementById('windSpeed').innerText;
// let speed = Number(windSpeed);
// console.log(typeof(windSpeed));

//check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
// if (temperature <=50 && windSpeed >3){
//     let windChill = 35.74 + 0.6215*temp - 35.75*(speed**0.16) + 0.4275*(temp*speed**0.16);
//     console.log(windChill);
//     document.getElementById('windChill').innerHTML=Math.round(windChill);
// } 
// else{
//     document.getElementById('windChill').innerHTML ='N/A';
// }


 