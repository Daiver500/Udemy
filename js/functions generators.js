"use strict"

function* generator() {        // функция генератор дает какой-то результат последовательно. Фукнцию вызвали получили результат, далее снова вызвали получили следующий результат
  yield "q";
  yield "w";
  yield "e";
  yield "r";
  yield "t";
  yield "y";
}

const str = generator();    // помещаем функцию в переменную 

console.log(str.next().value);   // вызов функции next() и получение первого значения

function* count(n) {
   for (let i=0; i < n; i++) {
     yield i;
   }
}

for (let k of count(7)) {        // перебор
  console.log(k)
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);