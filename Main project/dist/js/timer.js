// Timer

window.addEventListener("DOMContentLoaded", () => {
const deadline = '2021-07-31';   // конечная дата

const getRemainingTime = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()); // конечная дата минус текущая дата
    const days = Math.floor( (t/(1000*60*60*24)) );  
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

const getZero = (num) => {  // проверяем число и добавляем 0, если меньше 10
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
      return num;
  }
};

const setClock = (selector, endtime) => {    // сюда передаем два аргумента,в том числе конучную дату

    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");  // выбираем по id раздел
    const  hours = timer.querySelector('#hours'); // выбираем по id раздел
    const  minutes = timer.querySelector('#minutes'); // выбираем по id раздел
    const  seconds = timer.querySelector('#seconds'); // выбираем по id раздел
    timeInterval = setInterval(updateClock, 1000);  // функция обновления значения каждую секунду
    updateClock();
    function updateClock()  {
        const t = getRemainingTime(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
     }
 };

setClock('.timer', deadline);
});