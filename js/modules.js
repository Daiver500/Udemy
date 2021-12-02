"use strict"

// анонимная самовызывающася функция сразу вызывается и создает локальную область видимости

const number = 1;

(function(){
   let number = 2;
   console.log(number);
   console.log(number + 3)
}()); 

console.log(number)

// объектный интерфейс

const user = (function(){
  const private = function () {
      console.log("Private")
  }

  return {
    sayHello: private
  }
}());

user.sayHello()                                                                                                                                                         