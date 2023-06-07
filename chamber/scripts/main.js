//@Year
const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

//Last Updated Date/time
let text = document.lastModified;
const date = new Date(document.lastModified);
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

//Monday and Tuesday ONLY
// const day = date.getDay();
if (date.getDay() < 3 && date.getDay() > 0){
    document.getElementById("banner").classList.toggle("display");
}
