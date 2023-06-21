const url = 'https://dbkimball.github.io/wdd230/chamber/data.json';

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("cards");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    displaydirectory(data.directory);
}
  


const displayDirectory = (directory) => {
const cards = document.querySelector('div.cards');

directory.forEach((getDirectory) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let image = document.createElement('img');


    h2.textContent = `${directory.name}`;
    p1.textContent = `${directory.address}`;
    p2.textContent = `${directory.website}`;

    // Build the image portrait by setting all the relevant attribute
    image.setAttribute('src', directory.imageurl);
    image.setAttribute('alt', `Business logo for ${directoryt.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(image);

    cards.appendChild(card);
}); // end of forEach loop
} // end of function expression

getDirectory();

