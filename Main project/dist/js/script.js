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

// Modal

const openModalButtons = document.querySelectorAll(".btn_open_modal");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

const modalEscPressHandler = (evt) => {
  if (evt.key === "Escape") {
    hideModalWindow();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target === modal) {
    hideModalWindow();
  }
};

const openModalWindow = () => {
  modal.classList.add("show");
  document.addEventListener("keydown", modalEscPressHandler);
  modal.addEventListener("click", windowClickHandler);
  modalCloseButton.addEventListener("click", hideModalWindow);
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);  // если модальное окно уже было открыто, то обнуляем setTimeout 
};

const hideModalWindow = () => {
  modal.classList.remove("show");
  document.removeEventListener("keydown", modalEscPressHandler);
  modal.removeEventListener("click", windowClickHandler);
  modalCloseButton.removeEventListener("click", hideModalWindow);
  document.body.style.overflow = "visible";
};

openModalButtons.forEach((item) => {
  item.addEventListener("click", openModalWindow);
});

const modalTimerId = setTimeout(openModalWindow, 5000); // запускаем модалку через 5 секунд

const showModalByScroll = () => {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){   // пользователь докрутил до конца страницы (сравниваем видимый контент на странице + сколько уже прокручено со всей высотой скролла)
    openModalWindow(); 
    window.removeEventListener("scroll", showModalByScroll);
   }
};
window.addEventListener("scroll", showModalByScroll); 

// {once: true} это заставляет обработчик сработать один раз, но в данном случае не подходит
// сдвинуть колд вправо tab
// сдвинуть код влево shift+tab

// Классы для карточек 

class MenuCard {
  constructor (img, alt, title, text, price, parentSelector, ...classes) {
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.currency = 75;
    this.changeToRub();
  }

  changeToRub() {
    this.price = this.price * this.currency;
  }

  render() {
    const newElement = document.createElement("div");
    if(this.classes.length === 0) {
      this.newElement = "menu__item";  // задаем дефолтный класс, если никаких классов в rest операторе нет
      newElement.classList.add(this.newElement);
    } else {
      this.classes.forEach((item) => {
        newElement.classList.add(item);
      });
    }
     newElement.innerHTML = 
    `<img src=${this.img} alt=${this.alt}>
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">${this.text}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
    </div>`;
  this.parent.append(newElement);
  }
}

  const newCard = new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",  // классы, которы идут в rest оператор
    "big"
  );
  newCard.render();

  const newCardSecond = new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    9,
    ".menu .container",
    "menu__item"
  );
  newCardSecond.render();

  const newCardThird = new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    9,
    ".menu .container",
    "menu__item"
  );
  newCardThird.render();

  


  // альтернативный вариант new MenuCard().render()
});
