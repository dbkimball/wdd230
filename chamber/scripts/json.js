const url = 'https://dbkimball.github.io/wdd230/chamber/data.json';

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
}
const displayDirectory = (directories) => {
    const cards = document.querySelector('div.cards');//output container element


directories.forEach((directory) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let a1 = document.createElement("a");
    let image = document.createElement('img');
    

    //build content out
    h2.textContent = `${directory.name}`;
    p1.textContent = `${directory.address}`;
    p2.textContent = `${directory.phone}`;
    p3.textContent = `Membership Level: ${directory.membershipLevel}`;
    p4.textContent = `${directory.info}`;
    a1.textContent = `Website`;
    a1.href = directory.websiteURL;
    a1.target = 'blank';


    // Build the image by setting all the relevant attribute
    image.setAttribute('src', directory.imageurl);
    image.setAttribute('alt', `Image for ${directory.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');


    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(a1);
    card.appendChild(image);

    cards.appendChild(card);
}); // end of forEach loop
}

getDirectory();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards")

gridbutton.addEventListener("click", () => {
	display.classList.add("grid-view");
	display.classList.remove("list-view");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list-view");
	display.classList.remove("grid-view");
}


