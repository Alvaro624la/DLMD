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

eval("var DATA = {\n  person: {\n    happy: './src/happy.svg',\n    neutral: './src/neutral.svg',\n    sad: './src/sad.svg',\n    hungry: './src/hungry.svg',\n    thirsty: './src/thirsty.svg',\n    sleep: './src/sleep.svg'\n  },\n  necessities: {\n    food: './src/apple.svg',\n    water: './src/water-bottle.svg',\n    energy: './src/lightning.svg'\n  }\n};\nvar level = 0; //para bajar necesidades\n\nvar time = 0; //////////////////////// DOM ////////////////////////\n\nvar body = document.getElementById('body');\nvar main = document.getElementById('main'); //person container\n\nvar personCont = document.createElement('div');\npersonCont.className = 'main__personCont';\nmain.appendChild(personCont); //necessities container\n\nvar necessitiesCont = document.createElement('div');\nnecessitiesCont.className = 'main__necessitiesCont';\nmain.appendChild(necessitiesCont); //food container\n\nvar foodCont = document.createElement('div');\nfoodCont.className = 'main__necessitiesCont__foodCont';\nnecessitiesCont.appendChild(foodCont); //water container\n\nvar waterCont = document.createElement('div');\nwaterCont.className = 'main__necessitiesCont__waterCont';\nnecessitiesCont.appendChild(waterCont); //food container\n\nvar energyCont = document.createElement('div');\nenergyCont.className = 'main__necessitiesCont__energyCont';\nnecessitiesCont.appendChild(energyCont);\npersonCont.innerHTML = \"\\n<img class=\\\"main__personCont__img\\\" src=\\\"\".concat(DATA.person.happy, \"\\\" alt=\\\"person-state-img\\\">\\n\");\nfoodCont.innerHTML = \"\\n<img class=\\\"main__necessitiesCont__foodCont__img\\\" src=\\\"\".concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n<img class=\\\"main__necessitiesCont__foodCont__img\\\" src=\\\"\").concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n<img class=\\\"main__necessitiesCont__foodCont__img\\\" src=\\\"\").concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n<img class=\\\"main__necessitiesCont__foodCont__img\\\" src=\\\"\").concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n<img class=\\\"main__necessitiesCont__foodCont__img\\\" src=\\\"\").concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n\");\nwaterCont.innerHTML = \"\\n<img class=\\\"main__necessitiesCont__waterCont__img\\\" src=\\\"\".concat(DATA.necessities.water, \"\\\" alt=\\\"person-state-img\\\">\\n\");\nenergyCont.innerHTML = \"\\n<img class=\\\"main__necessitiesCont__energyCont__img\\\" src=\\\"\".concat(DATA.necessities.energy, \"\\\" alt=\\\"person-state-img\\\">\\n\");\n\n//# sourceURL=webpack:///./app.js?");

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