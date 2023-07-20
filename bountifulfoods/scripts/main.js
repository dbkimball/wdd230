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
// Event listener for the "Order Drink Here" button
document.getElementById('order').addEventListener('click', function() {
    // Navigate to the "fresh.html" page
    window.location.href = 'fresh.html';
  });

//drink count
function updateDrinkCount() {
    const drinkCountElement = document.getElementById('drinkCount');
    const currentCount = parseInt(localStorage.getItem('drinkCount')) || 0;
    drinkCountElement.textContent = currentCount;
  }

  // Function to increment the drink count and update local storage
  function incrementDrinkCount() {
    const currentCount = parseInt(localStorage.getItem('drinkCount')) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem('drinkCount', newCount);
    updateDrinkCount();
  }

  // Event listener for the order drink button
  document.getElementById('order').addEventListener('click', incrementDrinkCount);

  // Call the function to display the initial drink count when the page is loaded
  window.addEventListener('DOMContentLoaded', updateDrinkCount);
