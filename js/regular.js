"use strict"

// new regExp("pattern", "flags")    классический синтаксис для создания регулрного выражения
// var re = /pattern/flags;          для применения в реальной жизни

const answer = prompt("введите ваше имя");

const reg = /\d/g;

console.log(reg.test(answer))     // возвращает либо true либо false
console.log(answer.match(reg))

const string = "my name is R2D2";
console.log(string.match(/\w\d\w\d/i));  // находим R2D2 внутри строки
console.log(string.match(/\D/ig))

// ФЛАГИ   const reg = /n/g;  после второго слэша

// \D не числа
// \W не буквы

// \d ищем цифры
// \w ищем все слова
// \s ищем все пробелы
// \ экранирование, чтобы искать конкретно

// g глобальный поиск
// i регистронезависмый поиск
// m многострочный поиск

// console.log(answer.search(reg))
// console.log(answer.match(reg))  // ищем на соответствие 

// const pass = prompt("password") 

// console.log(pass.replace(/./g, "*"))       // заменяем в replace первый аргумент на второй, точка означает, что меняем все символы