//Get the two input values of temp and wind speed
let temperature = document.getElementById('temperature');
const temp = 50;
temp.innerHTMl = '$(temp) °F';

let windSpeed = document.getElementById('windSpeed');
const speed = 5;
windSpeed.innertHTML = '$(speed) mph';
console.log(speed);

//check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and

//either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements. The formula to calculate the wind chill factor is  =35.74+0.6215 −35.75 0.16+0.4275  0.16, where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.