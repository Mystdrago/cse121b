/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'James Curtis Halls II';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/my face.jpg';


/* Step 3 - Element Variables */

let nameElement = document.getElementById('name');
let yearElement = document.getElementById('year');
let imageElement = document.querySelector('main picture img');
let favFoodsElement = document.getElementById('favFoods');


/* Step 4 - Adding Content */

nameElement.textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ['Taco', 'Hamburger', 'Fries'];
favFoodsElement.innerHTML = '';
favFoods.forEach(food => {
const foodItem = document.createElement('div');
foodItem.textContent = food;
favFoodsElement.appendChild(foodItem);
});

let newFavoriteFood = 'Burrito';
favFoods.push(newFavoriteFood);

const newFoodItem = document.createElement('div');
newFoodItem.textContent = `New Favorite Food Added: ${newFavoriteFood}`;
favFoodsElement.appendChild(newFoodItem);

favFoods.shift();

const removedFoodItem = document.createElement('div');
removedFoodItem.textContent = `First Favorite Food Removed: ${favFoods[0]}`;
favFoodsElement.appendChild(removedFoodItem);

favFoods.pop();

const lastRemovedFoodItem = document.createElement('div');
lastRemovedFoodItem.textContent = `Last Favorite Food Removed: ${favFoods[favFoods.length - 1]}`;
favFoodsElement.appendChild(lastRemovedFoodItem);