// Первый способ

const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, "Hello");   //после запятой задается задержка на выполнение в милисекундах
// после второй запятой аргумент для функции

// Второй способ

const logger = function () {
    console.log("text");
};
const timerIdNew = setTimeout(logger, 2000); 

clearInterval(timerIdNew); //Остановка таймера

// Функция

const loggerNew = function () {
    if (counter === 3) {
      clearInterval(timerIdNewThree);
    }
    console.log("textNew");
    counter++;
};

const btn = document.querySelector(".btn");
const timerIdNewTwo = setTimeout(loggerNew, 2000); 
let timerIdNewThree;  //создание глобальной переменной
let counter = 0;

btn.addEventListener("click", () => {
  const timerIdNewTwo = setTimeout(loggerNew, 2000);   // задержка выполнения
  timerIdNewThree = setInterval(loggerNew, 2000); // интервал выполнения
});
// если функция loggerNew тяжелая и время затратная, тратится больше времени, чем задержка
// то задержка не срабатывае тв setInterval и фукнция повторяется без задержки
// решение ниже - рекурсивный setTimeout

let id = setTimeout(function log () {
  console.log("Hello world");
  id = setTimeout(log, 1000); // этот setTimeout будет дожидаться выполнения всех действия перед ним и потом делать заданную паузу 
}, 1000);


// Функция анимации с задержкой

const myAnimation = () => {
  const element = document.querySelector(".box");
  let position = 0;    //переменная с которой все стартует и которая будет меняться 
  const intervalTime = setInterval(frame, 10);
  function frame () {
    if (position === 300) {
        clearInterval(intervalTime);
    } else {
       position++;
       element.style.top = position + "px";
       element.style.left  = position + "px";
    }
  }
};
btn.addEventListener("click", myAnimation);


