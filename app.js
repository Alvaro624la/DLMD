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

//person container
let personCont = document.createElement('div');
personCont.className = 'main__personCont';
main.appendChild(personCont);

//necessities container
let necessitiesCont = document.createElement('div');
necessitiesCont.className = 'main__necessitiesCont';
main.appendChild(necessitiesCont);

//food container
let foodCont = document.createElement('div');
foodCont.className = 'main__necessitiesCont__foodCont';
necessitiesCont.appendChild(foodCont);

//water container
let waterCont = document.createElement('div');
waterCont.className = 'main__necessitiesCont__waterCont';
necessitiesCont.appendChild(waterCont);

//food container
let energyCont = document.createElement('div');
energyCont.className = 'main__necessitiesCont__energyCont';
necessitiesCont.appendChild(energyCont);



personCont.innerHTML = `
<img class="main__personCont__img" src="${DATA.person.happy}" alt="person-state-img">
`;

foodCont.innerHTML = `
<img class="main__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
<img class="main__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
<img class="main__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
<img class="main__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
<img class="main__necessitiesCont__foodCont__img" src="${DATA.necessities.food}" alt="person-state-img">
`;
waterCont.innerHTML = `
<img class="main__necessitiesCont__waterCont__img" src="${DATA.necessities.water}" alt="person-state-img">
`;
energyCont.innerHTML = `
<img class="main__necessitiesCont__energyCont__img" src="${DATA.necessities.energy}" alt="person-state-img">
`;