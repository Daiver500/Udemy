"use strict"

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {               // получаем значение
        return this.age
    },

    set userAge(number) {         // устанавливаем значение
        this.age = number;
    }
}

// console.log(persone.userAge)
// console.log(persone.age)

console.log(persone.userAge = 30)
console.log(persone.userAge)                                                                                                                                                                                                       