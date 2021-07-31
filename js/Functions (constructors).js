'use strict'

const num = new Number(3);  //создание нового элемента, старое, не используется
console.log(num)

const numNew = new Function(3); // старое, не используется

// Стандарт ES5 (сейчас такой функционал создается с помощью классов, которых изначально не было)

const User = function(name, id) {  // с большой буквы
  this.name = name;     // у стрелочной функции нет своего this, она будет его брать у своего родителя
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
};

User.prototype.exit = function( ) {
  console.log(`user ${this.name} left`);
};

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 29);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// конструкторы необходимы для создания новых однотипных объектах

// пример создания через классы

class UserNew {
  constructor(name, id) {
    this.name = name;     
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  exit() {
    console.log(`user ${this.name} left`);
  }
}

// классы как и функции конструкторы служат для создания новых объектов