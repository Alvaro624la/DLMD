/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("var DATA = {\n  person: {\n    happy: './src/happy.svg',\n    neutral: './src/neutral.svg',\n    sad: './src/sad.svg',\n    hungry: './src/hungry.svg',\n    thirsty: './src/thirsty.svg',\n    sleep: './src/sleep.svg'\n  },\n  necessities: {\n    food: './src/apple.svg',\n    water: './src/water-bottle.svg',\n    energy: './src/lightning.svg'\n  }\n};\nvar level = 0; //para bajar necesidades\n\nvar time = 0; //////////////////////// DOM ////////////////////////\n\nvar body = document.getElementById('body');\nvar main = document.getElementById('main');\nvar life = document.getElementById('life');\nvar inventory = document.getElementById('inventory'); //person container\n\nvar personCont = document.createElement('div');\npersonCont.className = 'life__personCont';\nlife.appendChild(personCont); //necessities container\n\nvar necessitiesCont = document.createElement('div');\nnecessitiesCont.className = 'life__necessitiesCont';\nlife.appendChild(necessitiesCont); //food container\n\nvar foodCont = document.createElement('div');\nfoodCont.className = 'life__necessitiesCont__foodCont';\nnecessitiesCont.appendChild(foodCont); //water container\n\nvar waterCont = document.createElement('div');\nwaterCont.className = 'life__necessitiesCont__waterCont';\nnecessitiesCont.appendChild(waterCont); //food container\n\nvar energyCont = document.createElement('div');\nenergyCont.className = 'life__necessitiesCont__energyCont';\nnecessitiesCont.appendChild(energyCont); //////add inventory items//////\n\ninventory.innerHTML = \"\\n<img id=\\\"lightning\\\" class=\\\"inventory__item\\\" src=\\\"\".concat(DATA.necessities.energy, \"\\\" alt=\\\"person-state-img\\\">\\n<img id=\\\"bottle\\\" class=\\\"inventory__item\\\" src=\\\"\").concat(DATA.necessities.water, \"\\\" alt=\\\"person-state-img\\\">\\n<img id=\\\"apple\\\" class=\\\"inventory__item\\\" src=\\\"\").concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //////NECESSITIES strings//////\n//food string to push later on foodArr\n\nvar foodString = \"<img class=\\\"life__necessitiesCont__foodCont__img\\\" src=\\\"\".concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //water string to push later on waterArr\n\nvar waterString = \"\\n<img class=\\\"life__necessitiesCont__waterCont__img\\\" src=\\\"\".concat(DATA.necessities.water, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //energy string to push later on energyArr\n\nvar energyString = \"\\n<img class=\\\"life__necessitiesCont__energyCont__img\\\" src=\\\"\".concat(DATA.necessities.energy, \"\\\" alt=\\\"person-state-img\\\">\\n\");\nvar foodArr = [];\nvar waterArr = [];\nvar energyArr = []; // foodCont.innerHTML = foodArr;\n// waterCont.innerHTML = waterArr;\n// energyCont.innerHTML = energyArr;\n//////get inventory items by ID//////\n\nvar invLightning = document.getElementById('lightning');\nvar invBottle = document.getElementById('bottle');\nvar invApple = document.getElementById('apple'); ////// NECESSITIES functions//////\n//////add inventory items to life necessities//////\n\ninventory.addEventListener('click', function (e) {\n  if (e.target.id === 'lightning' && energyArr.length < 5) {\n    energyArr.push(energyString);\n    energyCont.innerHTML = energyArr;\n  }\n\n  ;\n\n  if (e.target.id === 'bottle' && waterArr.length < 5) {\n    waterArr.push(waterString);\n    waterCont.innerHTML = waterArr;\n  }\n\n  ;\n\n  if (e.target.id === 'apple' && foodArr.length < 5) {\n    foodArr.push(foodString);\n    foodCont.innerHTML = foodArr;\n  }\n\n  ;\n}); //////PERSON strings//////\n\nvar happyString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.happy, \"\\\" alt=\\\"person-state-img\\\"></img>\");\nvar neutralString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.neutral, \"\\\" alt=\\\"person-state-img\\\"></img>\");\nvar sadString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.sad, \"\\\" alt=\\\"person-state-img\\\"></img>\");\nvar hungryString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.hungry, \"\\\" alt=\\\"person-state-img\\\"></img>\");\nvar thirstyString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.thirsty, \"\\\" alt=\\\"person-state-img\\\"></img>\");\nvar sleepString = \"<img class=\\\"life__personCont__img\\\" src=\\\"\".concat(DATA.person.sleep, \"\\\" alt=\\\"person-state-img\\\"></img>\"); //////PERSON functions//////\n//happy\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n//neutral\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n// //sad\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n// //hungry\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n// //thirsty\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n// //sleep\n// if(energyArr.length === 5 && waterArr.length === 5 && foodArr.length === 5){\n//     personCont.innerHTML = happyString;\n// }\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;