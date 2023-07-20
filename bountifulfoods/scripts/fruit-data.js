// const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// Function to fetch fruit data and populate the select elements
async function fetchAndPopulateFruits() {
  try {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
    const data = await response.json();

    const fruitSelects = document.querySelectorAll('select[id^="fruit"]');

    fruitSelects.forEach((selectElement) => {
      data.fruits.forEach((fruit) => {
        const option = document.createElement('option');
        option.text = fruit.name;
        option.value = fruit.name;
        selectElement.appendChild(option);
      });
    });
  } catch (error) {
    console.error('Error fetching fruit data:', error);
  }
}

// Call the function to fetch and populate the fruits when the page is loaded
window.addEventListener('DOMContentLoaded', fetchAndPopulateFruits);

