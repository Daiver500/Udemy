'use strict'

const person = {     // объект отправить на сервер нельзя
    name: 'Alex',
    phone: '+711111111',
    parents: {
      mom: 'Olga',
      dad: 'Petr'
    }
};

console.log(JSON.stringify(person)) // в таком формате можно отправить данные на сервер
console.log(JSON.parse(JSON.stringify(person)));  // в таком виде можно получить данные с сервера

const clone = JSON.parse(JSON.stringify(person))  // создаем глубокую копию объекта (копируем по значению объект внутри объекта)
clone.parents.mom = 'Nadya';
console.log(person)
console.log(clone)