const DATA = {
    person:{
        fullLiving: './src/fullLiving.svg',
        happy: './src/happy.svg',
        neutral: './src/neutral.svg',
        sad:'./src/sad.svg',
        hungry: './src/hungry.svg',
        thirsty: './src/thirsty.svg',
        sleep: './src/sleep.svg',
        dead: './src/dead.svg'
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
let personState = document.getElementById('personState');
let inventory = document.getElementById('inventory');
let itemsCont = document.getElementById('itemsCont');

//person container
// let personCont = document.createElement('div');
// personCont.className = 'life__personCont';
// life.appendChild(personCont);
let personCont = document.getElementById('personCont');

//necessities container
// let necessitiesCont = document.createElement('div');
// necessitiesCont.className = 'life__necessitiesCont';
// life.appendChild(necessitiesCont);
let necessitiesCont = document.getElementById('div');

//food container
// let foodCont = document.createElement('div');
// foodCont.className = 'life__necessitiesCont__foodCont';
// necessitiesCont.appendChild(foodCont);
let foodCont = document.getElementById('foodCont');

//water container
// let waterCont = document.createElement('div');
// waterCont.className = 'life__necessitiesCont__waterCont';
// necessitiesCont.appendChild(waterCont);
let waterCont = document.getElementById('waterCont');

//food container
// let energyCont = document.createElement('div');
// energyCont.className = 'life__necessitiesCont__energyCont';
// necessitiesCont.appendChild(energyCont);
let energyCont = document.getElementById('energyCont');

//////add inventory itemsCont items//////
itemsCont.innerHTML = `
<img id="lightning" class="inventory__itemsCont__item" src="${DATA.necessities.energy}" alt="person-state-img">
<img id="bottle" class="inventory__itemsCont__item" src="${DATA.necessities.water}" alt="person-state-img">
<img id="apple" class="inventory__itemsCont__item" src="${DATA.necessities.food}" alt="person-state-img">
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
<img class="life__necessitiesCont__waterCont__img" src="${DATA.necessities.energy}" alt="person-state-img">
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
///add default emoji (arrays lenght = null)
personState.src = DATA.person.dead;
///add inventory items to life necessities///
inventory.addEventListener('click', (e)=>{
    if(e.target.id === 'lightning' && energyArr.length < 5){
        energyArr.push(energyString);
        energyCont.innerHTML = energyArr.join('');
    };
    if(e.target.id === 'bottle' && waterArr.length < 5){
        waterArr.push(waterString);
        waterCont.innerHTML = waterArr.join('');
    };
    if(e.target.id === 'apple' && foodArr.length < 5){
        foodArr.push(foodString);
        foodCont.innerHTML = foodArr.join('');
    };
    //////person states//////
    //FULL LIVING!!!
    if(energyArr.length + waterArr.length + foodArr.length == 15){
        personState.src = DATA.person.fullLiving;
    }

    //happy
    if(energyArr.length + waterArr.length + foodArr.length > 9 && energyArr.length + waterArr.length + foodArr.length < 14){
        personState.src = DATA.person.happy;
    }

    //neutral
    if(energyArr.length + waterArr.length + foodArr.length <= 9){
        personState.src = DATA.person.neutral;
    }

    //hungry
    if(foodArr.length <= 1){
        personState.src = DATA.person.hungry;
    }

    //thirsty
    if(waterArr.length <= 1){
        personState.src = DATA.person.thirsty;
    }

    //sleep
    if(energyArr.length <= 1){
        personState.src = DATA.person.sleep;
    }

    // //sad
    if(energyArr.length + waterArr.length + foodArr.length <= 3){
        personState.src = DATA.person.sad;
    }

    //dead
    if(energyArr.length + waterArr.length + foodArr.length <= 2 || energyArr.length == 0 || waterArr.length == 0 || foodArr.length == 0){
        personState.src = DATA.person.dead;
    }
});