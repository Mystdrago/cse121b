/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "James Curtis Halls II";
const date = new Date();
let currentYear = date.getFullYear();
const profilePicture = "images\my-face.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img[src='images/my-face.png']");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.getElementById("year").textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);


/* Step 5 - Array */
const food = ["Pizza", "Ham and Cheese Sandwich", "Cheese"];
foodElement.innerHTML = food.join('<br>');
const newFavoriteFood = "Ice Cream";
food.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;
food.shift();
foodElement.innerHTML += `<br>${food.join('<br>')}`;
food.pop();
foodElement.innerHTML += `<br>${food.join('<br>')}`;







