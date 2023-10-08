/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Curtis Halls",
    photo: "images\my-face.jpg",
    favoriteFoods: [
        'Corndogs',
        'Pudding',
        'Soda',
        'Brocoli'
    ],
    hobbies: [
        'Playing Games',
        'Writing Fiction',
        'Sleep'
    ],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'Reno',
        length: '18 Years'
    },
    {
        place: 'Ann Arbor',
        length: '5 Years'
    },
    {
        place: 'Georgetown',
        length: '3 Years'
    },
    {
        place: 'Taylorsville',
        length: '2 Years'
    },
    {
        place: 'Layton',
        length: '2 weeks'
    }
);



/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
favoriteFoods = document.querySelector('#foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    hobbiesList.append(ul);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

