"use strict"

class Rectangle {                // шаблон                
  constructor (height, width) {   // аргументы, из аргумента приходят данные и записываются в свойства
    this.height = height;
    this.width = width;
  }

  calcArea() {                    // метод объекта, фукнция
    return this.height * this.width;
  }
}    

class coloredRectanglesWithText extends Rectangle {   // наследование параметров от предыдущего класса
    constructor (height, width, text, bgColor) {
      super(height, width);     // вызывает тоже самое, что было у родителя, то есть за счет наследования height, width перейдут сюда, super всегда должно быть на первом месте в конструкторе
      this.text = text;
      this.bgColor = bgColor;                                      
    }
    showMyProps () {
        console.log(`Текст ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new coloredRectanglesWithText(25, 45, "Проверка", "Red");
div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle (10, 10); //экземпляры, созданные на основе шаблона
const long = new Rectangle (20, 100);

console.log(square.calcArea());
console.log(long.calcArea());
// класс всегда начинается с большой буквы
// самый важный параметр это те аргументы, что будут передаваться извне
// классы как и функции конструкторы служат для создания новых объектов

const test = Object.create(square);
console.log(test.calcArea());

const testNew = {};
Object.setPrototypeOf(testNew, long);
console.log(testNew.calcArea());

