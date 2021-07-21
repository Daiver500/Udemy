//Tabs 

window.addEventListener("DOMContentLoaded", () => {
  const tabsHeader = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsHeaderParent = document.querySelector(".tabheader__items");

  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("show", "fade");
    });
    tabsHeader.forEach((item) => {
      item.classList.remove("tabheader__item--active");
    });
  };

  const showTabContent = (i = 0) => {       // i в данном случае это первый элемент массива
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hidden");
    tabsHeader[i].classList.add("tabheader__item--active");
  };

  hideTabContent();
  showTabContent();

  tabsHeaderParent.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target && target.classList.contains("tabheader__item")) {
        tabsHeader.forEach((item, i) => {      // i это номер элемента, который совпал
        if (target === item) {
            hideTabContent();
            showTabContent(i);       
        }
      });
    }
   });

   // Timer

   const deadline = '2020-05-11';

   function getTimeRemaining(endtime) {
       const t = Date.parse(endtime) - Date.parse(new Date()),
           days = Math.floor( (t/(1000*60*60*24)) ),
           seconds = Math.floor( (t/1000) % 60 ),
           minutes = Math.floor( (t/1000/60) % 60 ),
           hours = Math.floor( (t/(1000*60*60) % 24) );

       return {
           'total': t,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
       };
   }

   function getZero(num){
       if (num >= 0 && num < 10) { 
           return '0' + num;
       } else {
           return num;
       }
   }

   function setClock(selector, endtime) {

       const timer = document.querySelector(selector),
           days = timer.querySelector("#days"),
           hours = timer.querySelector('#hours'),
           minutes = timer.querySelector('#minutes'),
           seconds = timer.querySelector('#seconds'),
           timeInterval = setInterval(updateClock, 1000);

       updateClock();

       function updateClock() {
           const t = getTimeRemaining(endtime);

           days.innerHTML = getZero(t.days);
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);

           if (t.total <= 0) {
               clearInterval(timeInterval);
           }
       }
   }

   setClock('.timer', deadline);
});