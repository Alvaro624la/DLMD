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

eval("var DATA = {\n  person: {\n    fullLiving: './src/fullLiving.svg',\n    happy: './src/happy.svg',\n    neutral: './src/neutral.svg',\n    sad: './src/sad.svg',\n    hungry: './src/hungry.svg',\n    thirsty: './src/thirsty.svg',\n    sleep: './src/sleep.svg',\n    dead: './src/dead.svg'\n  },\n  necessities: {\n    food: './src/apple.svg',\n    water: './src/water-bottle.svg',\n    energy: './src/lightning.svg'\n  }\n}; //////////////////////// DOM ////////////////////////\n// Eliminar seleccion de texto\n\ndocument.onmousedown = function () {\n  return false;\n};\n\nvar body = document.getElementById('body');\nvar main = document.getElementById('main');\nvar life = document.getElementById('life');\nvar personState = document.getElementById('personState');\nvar inventory = document.getElementById('inventory');\nvar itemsCont = document.getElementById('itemsCont'); //person container\n\nvar personCont = document.getElementById('personCont'); //necessities container\n\nvar necessitiesCont = document.getElementById('div'); //food container\n\nvar foodCont = document.getElementById('foodCont'); //water container\n\nvar waterCont = document.getElementById('waterCont'); //food container\n\nvar energyCont = document.getElementById('energyCont'); //////add inventory itemsCont items//////\n\nitemsCont.innerHTML = \"\\n<img id=\\\"apple\\\" class=\\\"inventory__itemsCont__item\\\" src=\\\"\".concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n<img id=\\\"bottle\\\" class=\\\"inventory__itemsCont__item\\\" src=\\\"\").concat(DATA.necessities.water, \"\\\" alt=\\\"person-state-img\\\">\\n<img id=\\\"lightning\\\" class=\\\"inventory__itemsCont__item\\\" src=\\\"\").concat(DATA.necessities.energy, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //////NECESSITIES strings//////\n//food string to push later on foodArr\n\nvar foodString = \"<img class=\\\"life__necessitiesCont__foodCont__img\\\" src=\\\"\".concat(DATA.necessities.food, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //water string to push later on waterArr\n\nvar waterString = \"\\n<img class=\\\"life__necessitiesCont__waterCont__img\\\" src=\\\"\".concat(DATA.necessities.water, \"\\\" alt=\\\"person-state-img\\\">\\n\"); //energy string to push later on energyArr\n\nvar energyString = \"\\n<img class=\\\"life__necessitiesCont__energyCont__img\\\" src=\\\"\".concat(DATA.necessities.energy, \"\\\" alt=\\\"person-state-img\\\">\\n\");\nvar foodArr = [foodString, foodString, foodString, foodString, foodString];\nvar waterArr = [waterString, waterString, waterString, waterString, waterString];\nvar energyArr = [energyString, energyString, energyString, energyString, energyString];\nfoodCont.innerHTML = foodArr.join('');\nwaterCont.innerHTML = waterArr.join('');\nenergyCont.innerHTML = energyArr.join(''); ///first load state///\n\nemojiStates(); // or --> personState.src = DATA.person.fullLiving;\n//////get inventory items by ID//////\n\nvar invLightning = document.getElementById('lightning');\nvar invBottle = document.getElementById('bottle');\nvar invApple = document.getElementById('apple'); ///level, highscore, interval, points///\n\nvar levelIndicator = document.getElementById('levelIndicatorJS');\nvar level = 0;\nlevelIndicator.innerHTML = level;\nvar multip = 100;\nvar oper = 0;\nvar highscoreScoreboard = document.getElementById('highscoreContPNumber');\nvar highcoreNum = null;\nvar mSeconds = 2000;\nvar points = 0; //////////////////////// FUNCTIONS ////////////////////////\n//Emoji TOOLTIP\n\nvar personContTooltip = document.createElement('div');\npersonCont.appendChild(personContTooltip);\nvar stateTooltip = document.createElement('p');\nstateTooltip.className = 'life__personCont__tooltipYES__state';\nvar foodTooltip = document.createElement('p');\nfoodTooltip.className = 'life__personCont__tooltipYES__food';\nvar waterTooltip = document.createElement('p');\nwaterTooltip.className = 'life__personCont__tooltipYES__water';\nvar energyTooltip = document.createElement('p');\nenergyTooltip.className = 'life__personCont__tooltipYES__energy';\npersonContTooltip.appendChild(stateTooltip);\npersonContTooltip.appendChild(foodTooltip);\npersonContTooltip.appendChild(waterTooltip);\npersonContTooltip.appendChild(energyTooltip);\n\nfunction emojiTooltipYES() {\n  personContTooltip.className = 'life__personCont__tooltipYES'; //recortar string de personState:\n\n  var recorte1 = personState.attributes.src.value;\n  var recorte2 = recorte1.substring(6).replace('.svg', '');\n  var recorte3 = recorte2.charAt(0).toUpperCase() + recorte2.slice(1);\n  stateTooltip.innerHTML = \"State: <span>\".concat(recorte3, \"</span>\");\n  foodTooltip.innerHTML = \"Food: <span>\".concat(foodArr.length, \"</span>\");\n  waterTooltip.innerHTML = \"Water: <span>\".concat(waterArr.length, \"</span>\");\n  energyTooltip.innerHTML = \"Energy: <span>\".concat(energyArr.length, \"</span>\");\n}\n\n;\n\nfunction emojiTooltipNO() {\n  personContTooltip.className = 'life__personCont__tooltipNO';\n}\n\n;\npersonCont.addEventListener('mouseover', emojiTooltipYES);\npersonCont.addEventListener('mouseout', emojiTooltipNO); ///points, level and interval///\n\nfunction levelUp() {\n  if (points === 10) {\n    level++;\n    levelIndicator.innerHTML = level;\n    points = 0;\n\n    if (level == 4) {\n      multip = 50;\n    }\n\n    ;\n\n    if (level == 5) {\n      multip = 25;\n    }\n\n    ;\n\n    if (level == 6) {\n      multip = 12.5;\n    }\n\n    ;\n\n    if (level == 8) {\n      multip = 6;\n    }\n\n    ;\n\n    if (level == 9) {\n      multip = 3;\n    }\n\n    ;\n\n    if (level > 10) {\n      multip = 2;\n    }\n\n    ;\n    oper = level * multip;\n    mSeconds -= oper;\n    console.log(\"level \".concat(level, \" at mSeconds \").concat(mSeconds));\n    clearInterval(interval);\n    interval = window.setInterval(popNecessities, mSeconds); // set localStorage level number\n\n    localStorage.setItem('highscoreNum', JSON.stringify(level));\n  }\n\n  ;\n}\n\n; //////one item left on container//////\n\nfunction oneItemLeftColor() {\n  if (foodArr.length == 1) {\n    //background container color turns red\n    foodCont.style.backgroundColor = '#ff00aa50';\n  } else {\n    foodCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n  }\n\n  ;\n\n  if (waterArr.length == 1) {\n    waterCont.style.backgroundColor = '#ff00aa50';\n  } else {\n    waterCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n  }\n\n  ;\n\n  if (energyArr.length == 1) {\n    energyCont.style.backgroundColor = '#ff00aa50';\n  } else {\n    energyCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n  }\n\n  ;\n}\n\n; //////emoji states//////\n\nfunction emojiStates() {\n  //FULL LIVING!!!\n  if (energyArr.length + waterArr.length + foodArr.length == 15) {\n    personState.src = DATA.person.fullLiving;\n  }\n\n  ; //happy\n\n  if (energyArr.length + waterArr.length + foodArr.length > 9 && energyArr.length + waterArr.length + foodArr.length < 14) {\n    personState.src = DATA.person.happy;\n  }\n\n  ; //neutral\n\n  if (energyArr.length + waterArr.length + foodArr.length <= 9) {\n    personState.src = DATA.person.neutral;\n  }\n\n  ; //hungry\n\n  if (foodArr.length <= 1) {\n    personState.src = DATA.person.hungry;\n  }\n\n  ; //thirsty\n\n  if (waterArr.length <= 1) {\n    personState.src = DATA.person.thirsty;\n  }\n\n  ; //sleep\n\n  if (energyArr.length <= 1) {\n    personState.src = DATA.person.sleep;\n  }\n\n  ; //sad\n\n  if (energyArr.length + waterArr.length + foodArr.length <= 3) {\n    personState.src = DATA.person.sad;\n  }\n\n  ; //dead\n\n  if (energyArr.length + waterArr.length + foodArr.length <= 2 || energyArr.length == 0 || waterArr.length == 0 || foodArr.length == 0) {\n    personState.src = DATA.person.dead; ///////////GAME OVER///////\n    //remove EventListeners and Intervals\n\n    invLightning.removeEventListener('click', energy);\n    invBottle.removeEventListener('click', water);\n    invApple.removeEventListener('click', food);\n    clearInterval(interval); // clearInterval(intervalLastItem);\n    // cuando pierda-->get localStorage of level number to highscore;\n\n    highcoreNum = localStorage.getItem('highscoreNum');\n    highscoreScoreboard.innerHTML = highcoreNum; //background color turns grey and the rest bg default\n\n    foodCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n    waterCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n    energyCont.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';\n    main.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';\n  }\n\n  ;\n}\n\n; ////// NECESSITIES functions//////\n///add inventory items to life necessities///\n\nfunction energy() {\n  if (energyArr.length < 5) {\n    energyArr.push(energyString);\n    energyCont.innerHTML = energyArr.join('');\n    emojiStates();\n    oneItemLeftColor(); //añado puntos para subir de nivel (solo si el array es menor que 5)\n\n    points++;\n  }\n\n  ;\n  levelUp();\n}\n\n;\n\nfunction water() {\n  if (waterArr.length < 5) {\n    waterArr.push(waterString);\n    waterCont.innerHTML = waterArr.join('');\n    oneItemLeftColor();\n    emojiStates();\n    points++;\n  }\n\n  ;\n  levelUp();\n}\n\n;\n\nfunction food() {\n  if (foodArr.length < 5) {\n    foodArr.push(foodString);\n    foodCont.innerHTML = foodArr.join('');\n    oneItemLeftColor();\n    emojiStates();\n    points++;\n  }\n\n  ;\n  levelUp();\n}\n\n;\ninvLightning.addEventListener('click', energy);\ninvBottle.addEventListener('click', water);\ninvApple.addEventListener('click', food);\nvar interval = window.setInterval(popNecessities, mSeconds);\n\nfunction popNecessities() {\n  if (foodArr.length > 0 || waterArr.length > 0 || energyArr.length > 0) {\n    energyArr.pop(energyString);\n    waterArr.pop(waterString);\n    foodArr.pop(foodString);\n    foodCont.innerHTML = foodArr.join('');\n    waterCont.innerHTML = waterArr.join('');\n    energyCont.innerHTML = energyArr.join('');\n  }\n\n  oneItemLeftColor();\n  emojiStates(); //eliminar el ultimo item más lentamente (funciona pero si no añades ningun item más-->ésto reinicia los ms a los mSeconds porque el xArr > 1 ...tendria que hacer cada Cont dividido y eliminar items aleatoriamente y no los 3 Cont al mismo tiempo...liadísima) \n  // SOLUCION: Replanteamiento sistema de juego con los items: \n  // IDEA: Hacer \"pruebas\" que cuesten comida/agua/energia y si la haces mal, te quita ese elemento que haya costado. Si aciertas, \n  // if(\n  //     foodArr.length == 1 ||\n  //     waterArr.length == 1 ||\n  //     energyArr.length == 1 \n  // ){\n  //     console.log('ejecutar tiempo retraso last item');\n  //     let intervalLastItem = window.setTimeout(popLastNecessities, 4000);\n  //     function popLastNecessities(){\n  //         console.log('quitados tras 4 segundos');\n  //         energyArr.pop(energyString);\n  //         waterArr.pop(waterString);\n  //         foodArr.pop(foodString);\n  //         foodCont.innerHTML = foodArr.join('');\n  //         waterCont.innerHTML = waterArr.join('');\n  //         energyCont.innerHTML = energyArr.join('');\n  //     };\n  // };\n}\n\n; // cuando cargue la pag-->get localStorage of level number to highscore;\n\nhighcoreNum = localStorage.getItem('highscoreNum');\nhighscoreScoreboard.innerHTML = highcoreNum; ///////////PENDIENTE///////////\n///// 1 /////\n//eliminar en orden aleatorio las utilidedes vitales\n///juntar 3 arrays de items///\n// let allInArr = foodArr.concat(waterArr, energyArr);\n///los desordenamos///\n// allInArr.sort(()=>{return Math.random() - 0.5});\n// allInArr.pop();\n// console.log(allInArr);\n//\n\n//# sourceURL=webpack:///./app.js?");

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