const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

let text = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("currentdatetime").innerHTML = text;

const today = new Date();

      const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
      const dayOfMonth = today.getDate();
      const month = today.toLocaleDateString('en-US', { month: 'long' });
      const year = today.getFullYear();

      const dateElement = document.getElementById('currentDate');
      dateElement.textContent = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Banner displays only on Mondays or Tuesdays
const options = {
    weekday: "long", 
    day: "numeric", 
    month: "long", 
    year: "numeric",
};
let weekDay = now.getDay();
let message;
if (weekDay == 1 || weekDay == 2) {
  message = document.getElementById("hidden").innerHTML;
} else {
  message = document.getElementById("hidden").remove();
}

// let date1 = document.getElementById("currentDate");
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
// date1.innerHTML = fulldate;