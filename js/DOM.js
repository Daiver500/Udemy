const box = document.getElementById(""); //в кавычках id
const btns = document.getElementsByTagName(""); // в кавычках тег, здесь получаем псевдомассив всех кнопок (коллекцию), современный метод
const btnsOne = document.getElementsByTagName("")[1];  // обращение ко второму элементу псевдомассива
console.log(btns[1]);
const circles = document.getElementsByClassName(""); // элемент черех класс, псевдомассив (коллекция)

const button = document.querySelector("."); // в кавычках после точки класс, получаем первый элемент с таким названием класса
const allButtons = document.querySelectorAll("."); // в кавычках после точки класс, здесь получаем псевдомассив всех кнопок (коллекцию), современный метод

allButtons.forEach((item) => {  //перебираем элементы
  console.log(item);
}); 

box.style.backgroundColor = "red"; // изменение стилей
box.style.width = "500px"; // изменение стилей
allButtons[1].style.borderRadius = "30px"; // изменение стилей, обращаемся к элементу псевдомассива
circles[1].style.backgroundColor = "blue"; // изменение стилей, обращаемся к элементу псевдомассива

box.style.cssText ="background-color: yellow, width: 50px"; //назначение нескольких CSS свойств, можно через бэктики подставлять переменную через интерполяцию

// инлайн стили всегда перебивают все остальные, не важно, что будет написано в CSS

for (i=0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = "blue";   // применение одного стиля ко всем элементам
}

allButtons.forEach((item) => {
  item.style.backgroundColor = "blue";   // тоже самое, что и строчкой выше
});

// Создание нового элемента и добавление

const div = document.createElement("div");
const text = document.createTextNode("Здесь текст который создаем"); //используется очень редко

div.classList.add(""); // добавляем класс
div.classList.remove(""); //удаляем класс
div.classList.toggle(""); //переключаем класс

document.body.append(div); //добавляем элемент div в конец body
document.querySelector(".wrapper").append(div); //добавляем элемент внутрь элемента с классом который ищем

const wrapper = document.querySelector(".wrapper");
wrapper.append(div); //добавляем элемент в конец
wrapper.prepend(div); //добавляем элемент в начало

allButtons[0].before(div); //добавляем элемент перед первым элементом
allButtons[0].after(div); //добавляем элемент после первого элементом

circles[0].remove();  //удаляем элемент
circles[0].replaceWith(allButtons[0]); //заменяем первый элемент в массиве circles первым элементом из массива allButtons

//Устаревшие команды

wrapper.appendChild(div); //добавление элемента 
wrapper.removeChild(div); //удаление элемента 
wrapper.replaceChild(div, circles[0]); //замена элемента div на первый элемент circles
wrapper.insertBefore(div, circles[0]); //вставляем элемент div перед первым элементом circles

//Добавление текста или HTML в элемент

div.innerHTML = "Hello world";
div.innerHTML = "<h1>Hello world</h1>"; //добавляем html
div.textContent = "Hello"; //добавляем текст
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); //beforebegin перед элементом, afterbegin в начало элемента, beforeend в конец элемента, afterend после элемента
