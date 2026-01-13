console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniButton = document.getElementById("pepperoni-button");
const veggieButton = document.getElementById("veggie-button");
const bbqButton = document.getElementById("bbq-button");

const pepperoniScooter = document.getElementById("pepperoni-scooter");
const veggieScooter = document.getElementById("veggie-scooter");
const bbqScooter = document.getElementById("bbq-scooter");

const winnerDiv = document.getElementById("winner");



// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function
const movePepperoni = () => {
  pepperoni_step++;
  shift(pepperoniScooter, pepperoni_step);
  checkWinner();
};



// Write the function that moves the veggie scooter forward
const moveVeggie = () => {
  veggie_step++;
  shift(veggieScooter, veggie_step);
  checkWinner();
};



// Write the function that moves the bbq scooter forward
const moveBBQ = () => {
  bbq_step++;
  shift(bbqScooter, bbq_step);
  checkWinner();
};



// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found
const checkWinner = () => {
  if (pepperoni_step === 7) {
    winnerDiv.textContent = "🍕 Pepperoni wins!";
    disableAllButtons();
  } else if (veggie_step === 7) {
    winnerDiv.textContent = "🥗 Veggie wins!";
    disableAllButtons();
  } else if (bbq_step === 7) {
    winnerDiv.textContent = "🔥 BBQ wins!";
    disableAllButtons();
  }
};

const disableAllButtons = () => {
  pepperoniButton.disabled = true;
  veggieButton.disabled = true;
  bbqButton.disabled = true;
};



// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniButton.addEventListener("click", movePepperoni);
veggieButton.addEventListener("click", moveVeggie);
bbqButton.addEventListener("click", moveBBQ);
