const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

let text = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("currentdate").innerHTML = text;

let date1 = document.getElementById("currentTime");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en", {dateStyle: "full"}).format(now);
date1.innerHTML = fulldate;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


/*function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

/*const hamburgerBtn = document.querySelector('#hamburgerBtn');
const primaryNav = document.querySelector('primaryNav');
hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('responsive');
});

/*function toggleMenu() {
    document.getElementById('primaryNav')[0].classList.toggle('responsive');
}*/