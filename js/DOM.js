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