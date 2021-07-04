console.log(document.documentElement); // весь html
console.log(document.body.childNodes); // получаем как псевдомассив все элементы внутри родителя body
console.log(document.body.firstChild); // получаем первый узел (для получения элемента используем firstElementChild)
console.log(document.body.lastChild);  // получаем последний узел (для получения элемента используем lastElementChild)
console.log(document.querySelector("#current").parentNode); // находим родителя #current, если parentNode написать два раза, то найдем родителя родителя (узел)

console.log(document.querySelector('[data-current="3"]').nextSibling); // получение атрибута, смешивать ковычки нельзя, nextSibling дает возможность получить следующий узел
//previousSibling получаем предыдущий узел, если использовать nextElementSibling или previousElementSibling, то получим именно элементы

console.log(document.querySelector("#current").parentElement); // получаем элемент!!!

for (let node of document.body.childNodes) {
    if(node.nodeName === "#text") {
      continue;
    }
    console.log(node);
}