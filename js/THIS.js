"use strict"

const showThis = function (a, b) {
  console.log(this);
  const sum = function () {
    console.log(this);
    return a + b;
  };
  console.log(sum());
};
showThis(4, 5);  

// внутри такого вызова this равен undefined, без строго режима window

const obj = {
  a: 15,
  b: 20,
  sum: function () {
    const shout = function () {
      console.log(this);
    };
    shout();
  }
};
obj.sum();

// контекст у методов объектов это сам объект

const user = function(name, id) {  // функция конструктор для создания нового объекта
    this.name = name;      // у стрелочной функции нет своего this, она будет его брать у своего родителя
    this.id = id;
    this.human = true;
    this.hello = function () {
      console.log("Hello" + this.name);
    };
  };
  
let ivan = new user("Ivan", 23);
console.log(ivan);
ivan.hello();

// this в конструкторах и классах это новый экземпляр объекта

const sayName = function (surname) {
  console.log(this);
  console.log(this.name + surname);
};

const userNew = {
  name: "John"  
};

sayName.call(userNew, "Smith", ); // аргументы прописываются просто через запятую
sayName.apply(userNew, ["Smith", ]); // таким образом аргумент передается через массив

const count = function (num) {
  return this*num;
};

const double = count.bind(2); // через bind создается новая фукнция, двойка предается вместо this
console.log(double(3));

// ручное присвоение контекста, ручная привязка this: call, apply, bind 

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);   // при клике будет выводится сама кнопка в консоль <button></button>, контекстом вызова будет сам элемент на котором срабатывает событие, но только в том слчуае, если функция написана как в примере
  this.style.background = "red";
});

const objNew =  {    // у стрелочной функции нет своего this, она будет его брать у своего родителя
  num: 5,
  sayNumber: function() {
     const say = () => {
        console.log(this);
     };
     say();
  }
};

objNew.sayNumber();

const doubleNew = (a) => a * 2; //если действия помещаеются в одну строчку можно писать так
