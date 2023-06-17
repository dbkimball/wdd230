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


//discover page lazy load 
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
           items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
           });
        }, imgOptions);
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img)=> {
        loadImages(img);
    });
}

//Days since last visit
const visitDate = new Date();
localStorage.setItem('lastVisit', visitDate);

//retrieve the visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

//calculate the days between visits
const currentDate = new Date();
const daysBetweenVisits = Math.floor((currentDate - new Date(lastVisit))/ (1000 *60 *60 *24));

//display the number of days between visits on the page 
document.getElementById('daysVisit').textContent = daysBetweenVisits;

