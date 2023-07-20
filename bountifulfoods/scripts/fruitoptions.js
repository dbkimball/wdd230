const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function getFruitData() {
  const response = await fetch(url);
  const data = await response.json();
  displayFruits(data);
}

getFruitData();

const displayFruits = (fruits) => {
  const option1 = document.querySelector("#fruit1");
  const option2 = document.querySelector("#fruit2");
  const option3 = document.querySelector("#fruit3");
  fruits.forEach((fruit) => {
    // Create element for the three fruit choice labels
    let optionSelect1 = document.createElement("option");
    let optionSelect2 = document.createElement("option");
    let optionSelect3 = document.createElement("option");
    
    let fruitName = fruit.name;

    optionSelect1.innerHTML = fruitName;
    optionSelect2.innerHTML = fruitName;
    optionSelect3.innerHTML = fruitName;

    optionSelect1.setAttribute("value", fruit.name);
    optionSelect2.setAttribute("value", fruit.name);
    optionSelect3.setAttribute("value", fruit.name);

    option1.appendChild(optionSelect1);
    option2.appendChild(optionSelect2);
    option3.appendChild(optionSelect3);
  });
};


