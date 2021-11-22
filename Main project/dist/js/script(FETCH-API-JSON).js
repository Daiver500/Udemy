// TABS

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

// TIMER

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

// MODAL

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

const modalTimerId = setTimeout(openModalWindow, 50000); // запускаем модалку через 5 секунд

const showModalByScroll = () => {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){   // пользователь докрутил до конца страницы (сравниваем видимый контент на странице + сколько уже прокручено со всей высотой скролла)
    openModalWindow(); 
    window.removeEventListener("scroll", showModalByScroll);
   }
};
// {once: true} это заставляет обработчик сработать один раз, но в данном случае не подходит
// сдвинуть колд вправо tab
// сдвинуть код влево shift+tab
window.addEventListener("scroll", showModalByScroll); 

// CLASSES FOR CARDS AND CARD CREATION (WITHOUT CLASSES LOOK FOR THE SERVER PART BELOW) 

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

// SERVER GET/POST FETCH API JSON

const getData = async (url) => {          // внутри функции будет асинхронный код, async и await всегда используются в паре, в данной строке получаем информацию
  const result = await fetch(url);

  if (!result.ok)           {             // проверяем прошел ли запрос
     throw new Error (`Could not fetch ${url}, status: ${result.status}`);                  // выкидываем ошибку
  }              
  return await result.json ()
}

getData("http://localhost:3000/menu")                            // запрос к серверу
  .then(data => {
    data.forEach(({img, altimg, title, descr, price}) => {       // деструктуризация объекта 
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render()   // создание карточек на основе шаблона в классах (один из вариантов создания карточек)
    });
  });

/*axios.get("http://localhost:3000/menu")                        // AXIOS служит для обращения к серверу (GEt\POST) без создания дополнительных функций
.then(data => {
  data.data.forEach(({img, altimg, title, descr, price}) => {       
    new MenuCard(img, altimg, title, descr, price, ".menu .container").render()   
  });
});*/

/*getData("http://localhost:3000/menu")                       // СОЗДАНИЕ КАРТОЧЕК БЕЗ ШАБЛОНИЗАЦИИ ПО КЛАССАМ
.then(data => createCard(data));

const createCard = (data) => {
   data.forEach(({img, altimg, title, descr, price}) => {
      const element = document.createElement("div");
      element.classList.add("menu__item");
      element.innerHTML = `
      <img src=${img} alt=${altimg}>
    <h3 class="menu__item-subtitle">${title}</h3>
    <div class="menu__item-descr">${descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price}</span> руб/день</div>
    </div>
      `
      document.querySelector(".menu .container").append(element);
   })
}*/

  const forms = document.querySelectorAll("form");
  const  message = {                         // создаем объект с текстовыми сообщениями
    loading: "img/spinner.svg",
    success: "Спасибо и до свидания",
    error: "Ошибка"
  }
                     
  const postData = async (url, data) => {          // внутри функции будет асинхронный код, async и await всегда используются в паре
    const result = await fetch(url, {              // здесь дожидаеся ответа await 
      method: "POST",                          // отправляем информацию
        headers: {
          "Content-type": "application/json "       //заголовки нужны для отправки JSON
        },
        body: data                                  // фукнцию postData можно испольоваться как универсальную с различными аргументами
    });

    return await result.json()
  }

  const bindPostData = (form) => {
    const formSendingHandler = (evt) => {
      evt.preventDefault();
     
      const statusMessage = document.createElement("img");    // создаем новый элемент с текстовым сообщением и добавляем его на страницу
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `  
        margin: 0 auto;
        display: block;         
      `;                                                                   // CSS стили пропишем inline
      form.insertAdjacentElement("afterEnd", statusMessage);              // вставляем элемент после формы
      
      const formData = new FormData(form);   // собираем данные из формы, которые будем отправлять, как аргумент передается форма с которой собираем данные
                                             // !!! в html всегда обязательно указывать артрибут name="name" для интерактивных полей (input, textarea и т.д.) иначе FormData не найдет его !!!

      /*const object = {};                        
        formData.forEach(function(value, key) {  // ДЛЯ JSON  перебираем formData и формируем новый объект, так как JSON не примет formData другим образом
          object[key] = value;
      })*/                                        // заменили на способ ниже

      const json = JSON.stringify(Object.fromEntries(formData.entries())); // превращаем formData в массив массивов, затем в классический объект и затем в json

      //  Object.entries(obj) преобразует объект в массив массивов [key, value]
      //  Object.fromEntries(array); преобразует массив в объект

      /*fetch("server.php", {                     // обращаемся к серверу, вынесли это в отдельную функцию PostData
        method: "POST",                          // отправляем информацию
        headers: {
          "Content-type": "application/json "       //заголовки нужны для отправки JSON
        },
        body: json                             // сюда передаем json
      })*/
      postData("http://localhost:3000/requests", json)  // ДЛЯ JSON подготтавливаем данные для сервера
      .then(data => {                             // с сервера вернется какая-то информация
        console.log(data);
        showThanksModal(message.success);                                       
        statusMessage.remove();                      // удаляем сообщение через 2 секунды
      }).catch(() => {
        showThanksModal(message.error);                // если внутри fetch promise попадает на ошибку (404, 502 и т.д.), то reject не будет и promise выполниться, ошибка сработает только при отсутствии интернета
      }).finally(() => {
        form.reset();                              // очистка формы, также можно взять инпуты и сделать их value === "";
      })   
    }
    form.addEventListener("submit", formSendingHandler)
    form.addEventListener("submit", hideModalWindow)
  }

  forms.forEach((item) => {   // для каждой формы запускаем функцию postData и передаем в нее как аргумент форму
    bindPostData(item);
  });
 
  const showThanksModal = (message) => {                                    // сюда передаем как аргумент сообщение пользователю из объекта message
    const thanksModal = document.createElement("div");                      // создаем новую начинку модального окна для сообщения пользователю
    thanksModal.classList.add("modal__message");           
    thanksModal.innerHTML = `
    <div class="modal__dialog">
      <div class="modal__content">
        <div class="modal__close" data-close>×
        </div>
        <div class="modal__title">${message}</div>
      </div>
    <div>
    `; 
    document.querySelector(".page").append(thanksModal);            // добавляем в модальное окно новое наполнение
    setTimeout(() => {                                               // через определенное время удаляем сообщение пользователю и возвращаем обратно возможность вызвать и отправить форму
      thanksModal.remove();
    }, 4000)
    const modalMessage = document.querySelector(".modal__message");
    const modalClose = modalMessage.querySelector(".modal__close");
    const closeThanksModal = () => {
      thanksModal.remove();
    }
    modalClose.addEventListener("click", closeThanksModal);
  }      

  fetch("db.json")
    .then(data => data.json())
    .then(result => console.log(result))

  // SLIDER VARIANT 1  (скрытие карточек)

  /*const slides = document.querySelectorAll(".offer__slide");
  const previousSlideButton = document.querySelector(".offer__slider-prev");
  const nextSlideButton = document.querySelector(".offer__slider-next");
  const total = document.querySelector("#total");
  const current = document.querySelector("#current");
  let currentSlide = 1;                           

  const showCurrentSlideNumber = () => {                       // устанавливаем значение конкретного слайда
    if (slides.length < 10) {
      current.textContent = `0${currentSlide}`;
    } else {
      current.textContent = currentSlide;
    }
  }

  const showTotalSlidesQuantity = () => {                       // устанавливаем значение общего количества слайдов
    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
    } else {
      total.textContent = slides.length;
    }
  }
  showTotalSlidesQuantity();

  const showSlides = (number) => {            // функция принимает n куда будет приходит номер текущего слайда
    if (number > slides.length) {
      currentSlide = 1;                      // если n больше количества слайдов, то идет возврат на первый слайд
    }
    if (number < 1) {
      currentSlide = slides.length;          // если n меньше количества слайдов, то идет возврат на последний слайд
    }

    slides.forEach((item) => {               // скрываем все слайды
      item.style.display = "none"
    })

    slides[currentSlide - 1].style.display = "block"     // показываем только первый, так как массив начинается с 0, то указываем - 1, так как currentSlide = 1;
    showCurrentSlideNumber()                                   // запускаем функции показа номера конкретного слайда
  }
  showSlides(currentSlide);
  

  const changeSlides = (number) => {
    showSlides(currentSlide = currentSlide + number);
  }

  previousSlideButton.addEventListener("click", () => {
    changeSlides(-1);
  })

  nextSlideButton.addEventListener("click", () => {
    changeSlides(+1);
  })*/

  // SLIDER VARIANT 2 (проллистывание карточек)
    
  const slides = document.querySelectorAll(".offer__slide");
  const slider = document.querySelector(".offer__slider")
  const previousSlideButton = document.querySelector(".offer__slider-prev");
  const nextSlideButton = document.querySelector(".offer__slider-next");
  const total = document.querySelector("#total");
  const current = document.querySelector("#current");
  const slidesWrapper = document.querySelector(".offer__slider-wrapper");
  const slidesInner = document.querySelector(".offer__slider-inner");
  const width = window.getComputedStyle(slidesWrapper).width;                               // ширина блока где находятся слайдеры
  let currentSlide = 1; 
  let offset = 0;                                                  // на какое расстояние мы смещаемся, отсчет от 0   

  const showTotalSlidesQuantity = () => {                       // устанавливаем значение общего количества слайдов
    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${currentSlide}`;
    } else {
      total.textContent = slides.length;
      current.textContent = currentSlide;
    }
  }
  showTotalSlidesQuantity();

  slidesInner.style.width = 100 * slides.length + "%";             // задаем внутренней обложке общую ширину (от количества всех слайдов)
  slidesInner.style.display = "flex";                              
  slidesInner.style.transition = "0.5s all";                       // плавное смещение всех слайдов
  slidesWrapper.style.overflow = "hidden";
  
  slides.forEach((slide) => {
    slide.style.width = width;                                     // каждому слайду устанавливаем ширину равную ширине обертки, все слайды будут одинаковой ширины и внутри обертки
  })

  slider.style.position = "relative";                            

  const dots = document.createElement("ol");                     // создаем список для кнопок переключения слайдов
  const dotsArray = [];                                          // создаем пустой массив
  dots.classList.add("carousel-indicators");
  slider.append(dots);

  for (let i = 0; i < slides.length; i++) {                       // создаем кнопки переключения слайдов в количестве совпадающим с количеством слайдов
     const dot = document.createElement("li");
     dot.setAttribute("data-slide-to", i + 1);                    // пронумеровываем каждую кнопку
     dot.classList.add("dot")
     if (i === 0) {
       dot.style.opacity = 1;                                     // задаем активную кнопку через JS (без CSS)
     }
     dots.append(dot)
     dotsArray.push(dot);                                         // помещаем в массив наши точки
  };
 
  const deleteLetters = (string) => {                    // функция для замены значения width на числовое с помощью + и далее исключение "px" через replace
     return +string.replace(/\D/g, "");
  }

  nextSlideButton.addEventListener("click", () => {
    if (offset === deleteLetters(width) * (slides.length - 1)) {                 // если отступ будет равен ширине всех слайдов, то возвращаем отступ к базовому значению, также width превращаем в число унарным + и заменяем "px" через ругулярное выражение
      offset = 0;
    }  else {
      offset = offset + deleteLetters(width);                       // в противоположном случае смещаем на ширину одного слайда (+width.replace(/\D/g, ""))
    }                                                                                // ширина всех слайдов +width.replace(/\D/g, "") * (slides.length - 1)
    slidesInner.style.transform = `translateX(-${offset}px)`                         // передвигаем элемент по оси X влево при клике

    if (currentSlide === slides.length) {                                   // если нумерация слайдов равна количеству слайдов, то возвращаем значение к базовому
      currentSlide = 1;
    } else {
      currentSlide++;                                       // в ином случае увеличиваем значение на 1
    }

    if (slides.length < 10) {
      current.textContent =  `0${currentSlide}`;
    } else {
      current.textContent =  currentSlide;
    }
    dotsArray.forEach((dot) => {                    // перебираем массив точек и присваиваем значение прозрачности при клике
      dot.style.opacity = "0.5"
    });
    dotsArray[currentSlide-1].style.opacity = "1";        // так как массив начинается с 0, то указываем - 1, так как currentSlide = 1;
  })

  previousSlideButton.addEventListener("click", () => {                               
    if (offset === 0) {                                                            // если мы на первом слайде, то переносимся на последний       
      offset = deleteLetters(width) * (slides.length - 1)
    }  else {
      offset = offset - deleteLetters(width);                      
    }                                           
    slidesInner.style.transform = `translateX(-${offset}px)`                 // передвигаем элемент по оси X вправо при клике     
    
    if (currentSlide === 1) {                                  // если нумерация слайдов равна 1, то возвращаем значение к значению последнего слайда
      currentSlide = slides.length; 
  } else {
      currentSlide--;                                           // в ином случае уменьшаем значение на 1
  }

  if (slides.length < 10) {
      current.textContent =  `0${currentSlide}`;
  } else {
    current.textContent = currentSlide;
  }
  dotsArray.forEach((dot) => {
    dot.style.opacity = "0.5"
  });
  dotsArray[currentSlide-1].style.opacity = "1";
 });


 dotsArray.forEach((dot) => {
  dot.addEventListener('click', (evt) => {
      const slideTo = evt.target.getAttribute('data-slide-to');  // находим все кнопки по атрибуту, который присвоили ранее

      currentSlide = slideTo;                                         
      offset = deleteLetters(width) * (slideTo - 1);

      slidesInner.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
          current.textContent =  `0${currentSlide}`;
      } else {
          current.textContent =  currentSlide;
      }

      dotsArray.forEach((dot) => {
        dot.style.opacity = "0.5"
      });
      dotsArray[currentSlide-1].style.opacity = "1";
    });
  });

  // CALCULATOR

  const result = document.querySelector(".calculating__result span"); // поле вывода результата
  let sex;                                                             // задаем все переменные, что вводит пользователь
  let height;                               
  let weight;
  let age;
  let ratio;                                 // атрибут прописан в верстке дата атрибутами

  const calcTotal = () => {                                       
    if (!sex || !height || !weight || !age ||!ratio) {             // при отсутсивии данных выдаем ошибку
        result.textContent = "___"
        return                                                     // досрочно прерываем функцию
    } 

    if (sex === "female") {                                         // если пол женский
       result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)     // здесь берем формулу расчета каллорий и умножаем на уровень активности (см дата атрибуты в верстке у полей активности)
    } else {                                                                                                  // округляем все до целого числа
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)      // здесь тоже самое, что для женщин только для мужчин уже новая формула
    }
  }
  calcTotal()

  const getStaticInformation = (parentSelector) => {              // как аргумент передаем родителя и класс активности
     const elements = document.querySelectorAll(`${parentSelector} div`)         // получаем все дивы внутри родителя
     

     elements.forEach((element) => {
       element.addEventListener("click", (evt) => {
        if (evt.target.getAttribute("data-ratio")) {                            // если у элемента есть дата атрибут
           ratio = evt.target.getAttribute("data-ratio")        // переменная ratio будет = значению, написанному в дата атрибуте в верстке
        } else {
          sex = evt.target.getAttribute("id");                       // обращаемся к полям у которых нет дата атрибута, а есть id
        }
       
    
        elements.forEach((item) => {                           // удаляем класс активности у всех элементов
          item.classList.remove("calculating__choose-item_active");
        })
        evt.target.classList.add("calculating__choose-item_active");                // добавляем класс активности туда куда кликнули
        calcTotal()                                    // каждый раз вызываем функцию пересчета
      }) 
    })   
  }


  getStaticInformation("#gender")  // передаем как аргумент родительский id там где пол (М\Ж) 
  getStaticInformation(".calculating__choose_big")  // передаем сюда родителя статических элементов (активности)
  // Вызываем функцию два раза, так как у нас два блока элементов: М\Ж и блоки активностиs

  const getDynamycInformation = (id) => {
     const input = document.querySelector(id);
     input.addEventListener("input", () => {
       switch(input.getAttribute("id")) {             // проверяем на id инпуты, каждый раз когда будет что-то вводиться, то проверяется id и записывается соответствующее значение
         case "height": 
            height = input.value;
            break;
         case "weight":
            weight = input.value;
            break;
          case "age":
            age = input.value;
            break;
         }
         calcTotal()                              // каждый раз вызываем функцию пересчета
     })
   }
  getDynamycInformation("#height")     // вызываем функцию с тремя разными id
  getDynamycInformation("#weight")
  getDynamycInformation("#age")
});