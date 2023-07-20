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

//lazy load
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
