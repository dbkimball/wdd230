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

//Date Banner in Header
const today = new Date();

      const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
      const dayOfMonth = today.getDate();
      const month = today.toLocaleDateString('en-US', { month: 'long' });
      const year = today.getFullYear();

      const dateElement = document.getElementById('currentDate');
      dateElement.textContent = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

//Hamburger Button      
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Monday and Tuesday ONLY banner

if (dayValue < 3 && dayValue > 0){
    document.getElementById("banner").className = "visible";
}
