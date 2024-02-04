/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "James Curtis Halls II";
myProfile.photo = "images/my-face.jpg";
myProfile.favoriteFoods = ['Hamburgers', 'Corndogs', 'Sushi', 'Popcorn', 'Ice Cream'];
myProfile.hobbies = ['Writng', 'Coding', 'Playing RPGs'];



/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [];

myProfile.placesLived.push({
  place: 'Reno, NV',
  length: '18 years'
});

myProfile.placesLived.push({
  place: 'Ann Arbor, MI',
  length: '5 years'
});

myProfile.placesLived.push({
    place: 'Georgetown, KY',
    length: '3 years'
  });

myProfile.placesLived.push({
    place: 'Salt Lake City, UT',
    length: '2 years'
  });

myProfile.placesLived.push({
    place: 'Layton, UT',
    length: '4 Months'
  });
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });  

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  

