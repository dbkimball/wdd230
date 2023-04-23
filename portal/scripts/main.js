const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

const options = {day: 'numeric', month: 'numeric', year: 'numeric'}
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//getHours(), getMinutes(), getSeconds();
