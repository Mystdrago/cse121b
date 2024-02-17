/* Declare and initialize global variables */
const weaponsElement = document.querySelector('#weapons');
let weaponList = [];

/* async displayWeapons Function */
const displayWeapons = (weapons) => {
    weapons.forEach(weapon => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = weapon.weaponName;
        
        const img = document.createElement('img');
        img.src = weapon.imageUrl;
        img.alt = weapon.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        
        weaponsElement.appendChild(article);
    });
};

/* async getWeapons Function using fetch()*/
const getWeapons = async () => {
    const response = await fetch("https://github.com/Mystdrago/cse121b/blob/main/JSON/weapons.json");
    
    weaponList = await response.json();
    
    displayWeapons(weaponList);
};

/* reset Function */
const reset = () => {
    weaponsElement.innerHTML = '';
};

/* filterweapons Function */
const filterweapons = (weapons) => {
    reset();
    
    const filter = document.querySelector("#filtered").value;
    
    switch(filter) {
        case "all":
        default:
            displayWeapons(weapons);
            break;
        case  "One Handed":
            displayWeapons(weapons.filter(weapon => !weapon.handsToWield === 2));
            break;
        case  "Two Handed":
            displayWeapons(weapons.filter(weapon => weapon.handsToWield === 2));
            break;
        case  "Short Range":
            displayWeapons(weapons.filter(weapon => weapon.range < 2));
            break;
        case  "Medium Range":
            displayWeapons(weapons.filter(weapon => weapon.range === 2));
            break;
        case  "Long Range":
            displayWeapons(weapons.filter(weapon => weapon.range > 2));
            break;
        case  "Tearing Damage": 
            displayWeapons(weapons.filter(weapon => weapon.damage.includes("Tearing")));
            break;
        case "Penetrating Damage": 
            displayWeapons(weapons.filter(weapon => weapon.damage.includes("Penetrating")));
            break;
        case "Crushing Damage": 
            displayWeapons(weapons.filter(weapon => weapon.damage.includes("Crushing")));
            break;
        case "Swords": 
            displayWeapons(weapons.filter(weapon => weapon.type.includes("Swords")));
            break;
        case "Polearms":
            displayWeapons(weapons.filter(weapon => weapon.types.includes("Polearms")));
            break;
        case "Staves/Clubs":
            displayWeapons(weapons.filter(weapon => weapon.types.includes("Staves")));
            break;
        case "Bows":
            displayWeapons(weapons.filter(weapon => weapon.types.includes("Bows")));
            break;
        case "Crossbows":
            displayWeapons(weapons.filter(weapon => weapon.types.includes("Crossbows")));
            break;
        case "Not Swords":
            displayWeapons(weapons.filter(weapon => !weapon.types.includes("Swords")));
            break;
        case "Not Polearms":
            displayWeapons(weapons.filter(weapon => !weapon.types.includes("Polearms")));
            break;
        case "Not Staves/Clubs":
            displayWeapons(weapons.filter(weapon => !weapon.types.includes("Staves/Clubs")));
            break;
        case "Not Bows":
            displayWeapons(weapons.filter(weapon => !weapon.types.includes("Bows")));
            break;
        case "Not Crossbows":
            displayWeapons(weapons.filter(weapon => !weapon.types.includes("Crossbows")));
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterweapons(weaponList) });

getWeapons();
