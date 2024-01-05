// Write your code below:
// Select the div containing the main heading
const headerDiv = document.getElementById('header');

// Create the sub-heading element and set its properties
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic';

// Append the sub-heading after the main heading
headerDiv.appendChild(subHeading);





// Select the div containing the list of fruits
const fruitsDiv = document.querySelector('.fruits');

// Create a paragraph element for displaying the total fruits
const totalFruitsParagraph = document.createElement('p');
totalFruitsParagraph.textContent = 'Total fruits: 4';
totalFruitsParagraph.id = 'fruits-total';

// Insert the paragraph before the list of fruits
fruitsDiv.insertBefore(totalFruitsParagraph, fruitsDiv.firstChild);
