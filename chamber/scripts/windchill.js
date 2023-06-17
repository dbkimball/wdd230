//Get the two input values of temp and wind speed
let temperature = document.getElementById('temperature').innerText;
let temp = Number(temperature);

let windSpeed = document.getElementById('windSpeed').innerText;
let speed = Number(windSpeed);
console.log(typeof(windSpeed));

//check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
if (temperature <=50 && windSpeed >3){
    let windChill = 35.74 + 0.6215*temp - 35.75*(speed**0.16) + 0.4275*(temp*speed**0.16);
    console.log(windChill);
    document.getElementById('windChill').innerHTML=Math.round(windChill);
} 
else{
    document.getElementById('windChill').innerHTML ='N/A';
}


 