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

//////////////////////// DOM ////////////////////////
// Eliminar seleccion de texto
document.onmousedown = ()=>{return false};

let body = document.getElementById('body');
let main = document.getElementById('main');
let life = document.getElementById('life');
let personState = document.getElementById('personState');
let inventory = document.getElementById('inventory');
let itemsCont = document.getElementById('itemsCont');

//person container
let personCont = document.getElementById('personCont');

//necessities container
let necessitiesCont = document.getElementById('div');

//food container
let foodCont = document.getElementById('foodCont');

//water container
let waterCont = document.getElementById('waterCont');

//food container
let energyCont = document.getElementById('energyCont');

//////add inventory itemsCont items//////
itemsCont.innerHTML = `
<img id="apple" class="inventory__itemsCont__item" src="${DATA.necessities.food}" alt="person-state-img">
<img id="bottle" class="inventory__itemsCont__item" src="${DATA.necessities.water}" alt="person-state-img">
<img id="lightning" class="inventory__itemsCont__item" src="${DATA.necessities.energy}" alt="person-state-img">
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

let foodArr = [foodString, foodString, foodString, foodString, foodString];
let waterArr = [waterString, waterString, waterString, waterString, waterString];
let energyArr = [energyString, energyString, energyString, energyString ,energyString];
foodCont.innerHTML = foodArr.join('');
waterCont.innerHTML = waterArr.join('');
energyCont.innerHTML = energyArr.join('');
///first load state///
emojiStates()
// or --> personState.src = DATA.person.fullLiving;

//////get inventory items by ID//////
let invLightning = document.getElementById('lightning');
let invBottle = document.getElementById('bottle');
let invApple = document.getElementById('apple');

///level, highscore, interval, points///
const levelIndicator = document.getElementById('levelIndicatorJS');
let level = 0;
levelIndicator.innerHTML = level;
let multip = 100;
let oper = 0;

let highscoreScoreboard = document.getElementById('highscoreContPNumber');
let highcoreNum = null;

let mSeconds = 2000;

let points = 0;

//////////////////////// FUNCTIONS ////////////////////////
//Emoji TOOLTIP
let personContTooltip = document.createElement('div');
personCont.appendChild(personContTooltip);
    let stateTooltip = document.createElement('p');
    stateTooltip.className = 'life__personCont__tooltipYES__state';
    let foodTooltip = document.createElement('p');
    foodTooltip.className = 'life__personCont__tooltipYES__food';
    let waterTooltip = document.createElement('p');
    waterTooltip.className = 'life__personCont__tooltipYES__water';
    let energyTooltip = document.createElement('p');
    energyTooltip.className = 'life__personCont__tooltipYES__energy';
    personContTooltip.appendChild(stateTooltip);
    personContTooltip.appendChild(foodTooltip);
    personContTooltip.appendChild(waterTooltip);
    personContTooltip.appendChild(energyTooltip);

function emojiTooltipYES(){
    personContTooltip.className = 'life__personCont__tooltipYES';
    //recortar string de personState:
    let recorte1 = personState.attributes.src.value;
    let recorte2 = recorte1.substring(6).replace('.svg', '');
    let recorte3 = recorte2.charAt(0).toUpperCase() + recorte2.slice(1);
    stateTooltip.innerHTML = `State: <span>${recorte3}</span>`;
    foodTooltip.innerHTML = `Food: <span>${foodArr.length}</span>`;
    waterTooltip.innerHTML = `Water: <span>${waterArr.length}</span>`;
    energyTooltip.innerHTML = `Energy: <span>${energyArr.length}</span>`;
};
function emojiTooltipNO(){
    personContTooltip.className = 'life__personCont__tooltipNO';
};
personCont.addEventListener('mouseover', emojiTooltipYES);
personCont.addEventListener('mouseout', emojiTooltipNO);

///points, level and interval///
function levelUp(){
    if(points === 10){
        level++;
        levelIndicator.innerHTML = level;
        points = 0;
        if(level == 4){
            multip = 50;
        };
        if(level == 5){
            multip = 25;
        };
        if(level == 6){
            multip = 12.5;
        };
        if(level == 8){
            multip = 6;
        };
        if(level == 9){
            multip = 3;
        };
        if(level > 10){
            multip = 2;
        };
        oper = level * multip;
        mSeconds -= oper;
        console.log(`level ${level} at mSeconds ${mSeconds}`);
        clearInterval(interval);
        interval = window.setInterval(popNecessities, mSeconds);
        // set localStorage level number
        localStorage.setItem('highscoreNum', JSON.stringify(level))
    };
};

//////one item left on container//////
function oneItemLeftColor(){
    if(foodArr.length == 1){
        //background container color turns red
        foodCont.style.backgroundColor = '#ff00aa50';
    } else {
        foodCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    };
    if(waterArr.length == 1){
        waterCont.style.backgroundColor = '#ff00aa50';
    } else {
        waterCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    };
    if(energyArr.length == 1){
        energyCont.style.backgroundColor = '#ff00aa50';
    } else {
        energyCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    };
};

//////emoji states//////
function emojiStates(){
    //FULL LIVING!!!
    if(energyArr.length + waterArr.length + foodArr.length == 15){
        personState.src = DATA.person.fullLiving;
    };
    //happy
    if(energyArr.length + waterArr.length + foodArr.length > 9 && energyArr.length + waterArr.length + foodArr.length < 14){
        personState.src = DATA.person.happy;
    };
    //neutral
    if(energyArr.length + waterArr.length + foodArr.length <= 9){
        personState.src = DATA.person.neutral;
    };
    //hungry
    if(foodArr.length <= 1){
        personState.src = DATA.person.hungry;
    };
    //thirsty
    if(waterArr.length <= 1){
        personState.src = DATA.person.thirsty;
    };
    //sleep
    if(energyArr.length <= 1){
        personState.src = DATA.person.sleep;
    };
    //sad
    if(energyArr.length + waterArr.length + foodArr.length <= 3){
        personState.src = DATA.person.sad;
    };
    //dead
    if(energyArr.length + waterArr.length + foodArr.length <= 2 || energyArr.length == 0 || waterArr.length == 0 || foodArr.length == 0){
        personState.src = DATA.person.dead;
        ///////////GAME OVER///////
        //remove EventListeners and Intervals
        invLightning.removeEventListener('click', energy);
        invBottle.removeEventListener('click', water);
        invApple.removeEventListener('click', food);
        clearInterval(interval);
        // clearInterval(intervalLastItem);
        // cuando pierda-->get localStorage of level number to highscore;
        highcoreNum = localStorage.getItem('highscoreNum');
        highscoreScoreboard.innerHTML = highcoreNum;
        //background color turns grey and the rest bg default
        foodCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        waterCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        energyCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        main.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
    };
};


////// NECESSITIES functions//////
///add inventory items to life necessities///
function energy(){
    if(energyArr.length < 5){
        energyArr.push(energyString);
        energyCont.innerHTML = energyArr.join('');
        emojiStates();
        oneItemLeftColor();
        //añado puntos para subir de nivel (solo si el array es menor que 5)
        points++;
    };
    levelUp();
};
function water(){
    if(waterArr.length < 5){
        waterArr.push(waterString);
        waterCont.innerHTML = waterArr.join('');
        oneItemLeftColor();
        emojiStates();
        points++;
    };
    levelUp();
};
function food(){
    if(foodArr.length < 5){
        foodArr.push(foodString);
        foodCont.innerHTML = foodArr.join('');
        oneItemLeftColor();
        emojiStates();
        points++;
    };
    levelUp();
};
invLightning.addEventListener('click', energy);
invBottle.addEventListener('click', water);
invApple.addEventListener('click', food);

let interval = window.setInterval(popNecessities, mSeconds);
function popNecessities(){
    if(
        foodArr.length > 0 ||
        waterArr.length > 0 ||
        energyArr.length > 0
    ){
        energyArr.pop(energyString);
        waterArr.pop(waterString);
        foodArr.pop(foodString);
        foodCont.innerHTML = foodArr.join('');
        waterCont.innerHTML = waterArr.join('');
        energyCont.innerHTML = energyArr.join('');
    }
    oneItemLeftColor();
    emojiStates();

    //eliminar el ultimo item más lentamente (funciona pero si no añades ningun item más-->ésto reinicia los ms a los mSeconds porque el xArr > 1 ...tendria que hacer cada Cont dividido y eliminar items aleatoriamente y no los 3 Cont al mismo tiempo...liadísima) 
    // SOLUCION: Replanteamiento sistema de juego con los items: 
    // IDEA: Hacer "pruebas" que cuesten comida/agua/energia y si la haces mal, te quita ese elemento que haya costado. Si aciertas, 
    
    // if(
    //     foodArr.length == 1 ||
    //     waterArr.length == 1 ||
    //     energyArr.length == 1 
    // ){
    //     console.log('ejecutar tiempo retraso last item');
    //     let intervalLastItem = window.setTimeout(popLastNecessities, 4000);
    //     function popLastNecessities(){
    //         console.log('quitados tras 4 segundos');
    //         energyArr.pop(energyString);
    //         waterArr.pop(waterString);
    //         foodArr.pop(foodString);
    //         foodCont.innerHTML = foodArr.join('');
    //         waterCont.innerHTML = waterArr.join('');
    //         energyCont.innerHTML = energyArr.join('');
    //     };
    // };
};

// cuando cargue la pag-->get localStorage of level number to highscore;
highcoreNum = localStorage.getItem('highscoreNum');
highscoreScoreboard.innerHTML = highcoreNum;




///////////PENDIENTE///////////
///// 1 /////
//eliminar en orden aleatorio las utilidedes vitales
///juntar 3 arrays de items///

// let allInArr = foodArr.concat(waterArr, energyArr);

///los desordenamos///

// allInArr.sort(()=>{return Math.random() - 0.5});
// allInArr.pop();
// console.log(allInArr);
//