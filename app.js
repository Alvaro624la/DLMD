const DATA = {
    person:{
        happy: './src/happy.svg',
        neutral: './src/neutral.svg',
        sad:'./src/sad.svg',
        hungry: './src/hungry.svg',
        thirsty: './src/thirsty.svg',
        sleep: './src/sleep.svg'
    },
    necessities:{
        food: './src/apple.svg',
        water:'./src/water-bottle.svg',
        energy: './src/lightning.svg'  
    }
};

let level = 0;

//para bajar necesidades
let time = 0;

//////////////////////// DOM ////////////////////////
let body = document.getElementById('body');
let main = document.getElementById('main');
let life = document.getElementById('life');
let inventory = document.getElementById('inventory');

//person container
let personCont = document.createElement('div');
personCont.className = 'life__personCont';
life.appendChild(personCont);

//necessities container
let necessitiesCont = document.createElement('div');
necessitiesCont.className = 'life__necessitiesCont';
life.appendChild(necessitiesCont);

//food container
let foodCont = document.createElement('div');
foodCont.className = 'life__necessitiesCont__foodCont';
necessitiesCont.appendChild(foodCont);

//water container
let waterCont = document.createElement('div');
waterCont.className = 'life__necessitiesCont__waterCont';
necessitiesCont.appendChild(waterCont);

//food container
let energyCont = document.createElement('div');
energyCont.className = 'life__necessitiesCont__energyCont';
necessitiesCont.appendChild(energyCont);

//////add inventory items//////
inventory.innerHTML = `
<img id="lightning" class="inventory__item" src="${DATA.necessities.energy}" alt="person-state-img">
<img id="bottle" class="inventory__item" src="${DATA.necessities.water}" alt="person-state-img">
<img id="apple" class="inventory__item" src="${DATA.necessities.food}" alt="person-state-img">
`;

//////NECESSITIES strings//////
//food string to push later on foodArr
let foodString = `<img class="life__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
`;
//water string to push later on waterArr
let waterString = `
<img class="life__necessitiesCont__waterCont__img" src="${DATA.necessities.water}" alt="person-state-img">
`;
//energy string to push later on energyArr
let energyString = `
<img class="life__necessitiesCont__energyCont__img" src="${DATA.necessities.energy}" alt="person-state-img">
`;

let foodArr = [];
let waterArr = [];
let energyArr = [];

// foodCont.innerHTML = foodArr;
// waterCont.innerHTML = waterArr;
// energyCont.innerHTML = energyArr;

//////get inventory items by ID//////
let invLightning = document.getElementById('lightning');
let invBottle = document.getElementById('bottle');
let invApple = document.getElementById('apple');

////// NECESSITIES functions//////
//////add inventory items to life necessities//////
inventory.addEventListener('click', (e)=>{
    if(e.target.id === 'lightning' && energyArr.length < 5){
        energyArr.push(energyString);
        energyCont.innerHTML = energyArr;
    };
    if(e.target.id === 'bottle' && waterArr.length < 5){
        waterArr.push(waterString);
        waterCont.innerHTML = waterArr;
    };
    if(e.target.id === 'apple' && foodArr.length < 5){
        foodArr.push(foodString);
        foodCont.innerHTML = foodArr;
    };
});

//////PERSON strings//////
const happyString = `<img class="life__personCont__img" src="${DATA.person.happy}" alt="person-state-img"></img>`;
const neutralString = `<img class="life__personCont__img" src="${DATA.person.neutral}" alt="person-state-img"></img>`;
const sadString = `<img class="life__personCont__img" src="${DATA.person.sad}" alt="person-state-img"></img>`;
const hungryString = `<img class="life__personCont__img" src="${DATA.person.hungry}" alt="person-state-img"></img>`;
const thirstyString = `<img class="life__personCont__img" src="${DATA.person.thirsty}" alt="person-state-img"></img>`;
const sleepString = `<img class="life__personCont__img" src="${DATA.person.sleep}" alt="person-state-img"></img>`;

//////PERSON functions//////
//happy
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }
//neutral
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }

// //sad
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }

// //hungry
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }

// //thirsty
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }

// //sleep
// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){
//     personCont.innerHTML = happyString;
// }