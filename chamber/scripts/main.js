//@Year
const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

//Last Updated Date/time
let text = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("currentdatetime").innerHTML = text;

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
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Monday/Tuesday ONLY id = Banner
if (now.getDay() < 3 && now.getDay() > 0){
    document.getElementById("banner").classList.toggle("open");
}

// let date1 = document.getElementById("currentDate");
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
// date1.innerHTML = fulldate;