// Function to handle form submission and display the output
  document.getElementById('drinkForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const specialInstructions = document.getElementById('specialInstructions').value;

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = `
      <h3>Order Summary:</h3>
      <p>First Name: ${firstName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Fruit 1: ${fruit1}</p>
      <p>Fruit 2: ${fruit2}</p>
      <p>Fruit 3: ${fruit3}</p>
      <p>Special Instructions: ${specialInstructions}</p>
    `;
  });

