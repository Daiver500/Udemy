"use strict"

// отделение и сокрытие от внешнего мира части программы называется инкапсуляцией
// объект хранит свое состояние в приватном порядке (в ООП) и только методы объекта имеют доступ к его изменению
// это защита от вмешательства пользователя, также можно дорабатывать программу и это удобно

// Функция конструктор и инкапсуляция

function User(name,age) {    
    this.name = name;
    let userAge = age;   // теперь переменная недоступна снаружи, это зачатки инкапсуляции

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`)
    }

    this.getAge = function () {    // метод для получения возраста
        return userAge;
    }

    this.setAge = function(age) {                                 // метод для присвоения возраста
       if (typeof age === "number" && age > 0 && age < 110) {
          userAge = age;
       } else {
           console.log("Недопустимое значение")
       }
    }
}

const ivan = new User("Ivan", 27)
console.log(ivan.name)           // получаем имя
console.log(ivan.getAge())       // используем геттер для получения дефолтного числа

ivan.setAge(30);        // устанавливаем число без вывода в консоль
ivan.setAge(300);       // устанавливаем число, но так как оно больше 110, то получаем "Недопустимое значение"
console.log(ivan.getAge())   // получаем текущее число

ivan.say();

// Классы и инкапсуляция

class User {    
constructor (name,age) {
    this.name = name;
    this._age = age;   // теперь переменная недоступна снаружи (из-за нижнего подчеркивания)
    }

    #surname = "Zenev"  // свойство объекта можно писать вне конструктора, решетка используется для приватности
   
    say = () => {      // можно использовать стрелочную функцию
      console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`)
    }

    get age() {    // гетим (получаем)
      return this._age;
    }

    set age(age) {                                 // сетим (устанавливаем)
       if (typeof age === "number" && age > 0 && age < 110) {
          this._age = age;
       } else {
           console.log("Недопустимое значение")
       }
    }//
}

const alex = new User("Alexei", 37);
//console.log(ivan.age);          
//ivan.age = 99; 
//console.log(ivan.age);  
console.log(alex.surname)  // снаружи не сможем получить это приватное свойство
alex.say();