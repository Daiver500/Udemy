// SLIDER

const slider= () => {
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

}
module.exports = slider;