//@Year
const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

const currDate = Date.now();
const dt = new Date(currDate);
const dayValue = dt.getDay();

//Last Updated Date/time
let text = document.lastModified;
let modifiedDate = new Date(text);
document.getElementById('currentdatetime').innerHTML = text;


//retrieve the visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');



