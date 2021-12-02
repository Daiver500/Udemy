// CALCULATOR

const calculator = () => {
    
const result = document.querySelector(".calculating__result span"); // поле вывода результата

 let sex;                                                          
 let height;                               
 let weight;                                          
 let age;
 let ratio;                               

 if (localStorage.getItem("sex")) {                    // если в localStorage есть данные используем их, если нет задаем дефолтное значение
   sex = localStorage.getItem("sex")
 } else {
   sex = "female";
   localStorage.setItem("sex", "female")
 }

 if (localStorage.getItem("ratio")) {                    // если в localStorage есть данные используем их, если нет задаем дефолтное значение
   ratio = localStorage.getItem("ratio")
 } else {
   ratio = "1.375";
   localStorage.setItem("ratio", "1.375")
 }

 const initLocalSettings = (selector) => {                    // функция для localStorage
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
     element.classList.remove("calculating__choose-item_active")
     if (element.getAttribute("id") === localStorage.getItem("sex")) {
        element.classList.add("calculating__choose-item_active")
     }
     if (element.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
       element.classList.add("calculating__choose-item_active")
     }
    })
 }
 initLocalSettings("#gender div")
 initLocalSettings(".calculating__choose_big div")

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

 const getStaticInformation = (selector) => {              // как аргумент передаем родителя и класс активности
    const elements = document.querySelectorAll(selector)         // получаем все дивы внутри родителя
    

    elements.forEach((element) => {
      element.addEventListener("click", (evt) => {
       if (evt.target.getAttribute("data-ratio")) {                            // если у элемента есть дата атрибут
          ratio = evt.target.getAttribute("data-ratio")        // переменная ratio будет = значению, написанному в дата атрибуте в верстке
          localStorage.setItem("ratio", evt.target.getAttribute("data-ratio"))  // записываем значение в localStorage
       } else {
         sex = evt.target.getAttribute("id");                       // обращаемся к полям у которых нет дата атрибута, а есть id
         localStorage.setItem("sex", evt.target.getAttribute("id"))  // записываем значение в localStorage
       }
      
   
       elements.forEach((item) => {                           // удаляем класс активности у всех элементов
         item.classList.remove("calculating__choose-item_active");
       })
       evt.target.classList.add("calculating__choose-item_active");                // добавляем класс активности туда куда кликнули
       calcTotal()                                    // каждый раз вызываем функцию пересчета
     }) 
   })   
 }


 getStaticInformation("#gender div")  // передаем как аргумент div внутри родителя
 getStaticInformation(".calculating__choose_big div")  // передаем сюда div внутри родителя
 // Вызываем функцию два раза, так как у нас два блока элементов: М\Ж и блоки активности

 const getDynamycInformation = (id) => {
    const input = document.querySelector(id);
    input.addEventListener("input", () => {
       if (input.value.match(/\D/g)) {                 // проверяем инпут на буквы и если вводятся не цифры, то красный бордер
          input.style.border = "1px solid red"
       } else {
         input.style.border = "none"
       }

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
}
module.exports = calculator;