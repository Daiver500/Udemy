"use strict";

let str = "some";
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

const john = {
  health: 100,
}

// устаревший форматб не использовать!!!

john.__proto__ = soldier; // прототип джона soldier, 
// таким образом можно использовать свойства оригинала (иметь один прототип для всех)
console.log(john);
console.log(john.armor);
john.sayHello();

// Современный формат

// Даем возможность в новом объекте использовать свойства прототипа

Object.setPrototypeOf(john, soldier); // первый аргумент к чему применяем прототип, второй аргумент какой прототип применяем
john.sayHello();

// создаем новый объект из прототипа 
// объект newJohn будет прототипно наследоваться от soldier

const newSoldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
      console.log("Hello");
    }
  };

const newJohn = Object.create(newSoldier);
newJohn.sayHello();
console.log(newJohn.health, newJohn.armor);
