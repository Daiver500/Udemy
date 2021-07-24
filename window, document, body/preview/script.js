'use strict';

const box = document.querySelector(".box");

const width = box.clientWidth; // размер элемента без учета бордеров и марджинов
const height = box.clientHeight;

console.log(height, width);

const width1 = box.offsetWidth; // размер элемента 
const height1 = box.offsetHeight;

const width2 = box.scrolltWidth; // полная высота с учетом прокрутки
const height2 = box.scrollHeight;

// scrollTop сколько контента не отлистанного сверху

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
 //  box.style.height = box.scrollHeight + 'px';
  console.log (box.scrollTop);
});

console.log(box.getBoundingClientRect()); // все координаты кооротые есть у элемента

const style = window.getComputedStyle(box);  // получаем конкретные стили у элемента из css, в том числе псевдо элементов, можем только получить
// инлайн стили через JS имеют приоритет перед CSS стилями, в самом CSS стили поменять не можем

console.log(style.display)
console.log(document.documentElement.clientWidth);  //непосредственно с document не работает, только через documentElement
console.log(document.documentElement.scrollTop);