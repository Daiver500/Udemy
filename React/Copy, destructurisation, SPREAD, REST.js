"use strict"

let names = ["Alexey", "Anna", "Petr", "Aleksander"]

const newNames = names.filter((item) => {
    return item.length < 5;
});

console.log(newNames);

// Создание нового массива

let answers = ["iVan", "Anna", "HeLLo"]

const newAnswers = answers.map((item) => {
    return item.toLowerCase()
});

console.log(newAnswers)

console.log(`Пользователь ${name}, ${age} лет`)  // интерполяция

const fetchData = function (data, count = 0) {
  console.log(`Данные: ${data} в количестве ${count}`)
};
fetchData('something')

// REST оператор

const max = function (a, b,...numbers) {    // rest оператор позволяет функции принимать неограниченное количество аргументов и все они будут записываться в массив numbers, rest оператор всегда в конце и только один
  console.log(numbers);
};
max(3, 4, 67, 97);

// SPREAD оператор

const arrayOne = [1, 2, 5]
const arrayTwo = [43, 2, 6]

const arraysResult = Math.max(...arrayOne, ...arrayTwo); // spread оператор разворачивает массивы на значения 
console.log(arraysResult)

const avatar = "photo";
const user = {
  name: "default",
  pass: "qwerty",
  right: "user"
}

const admin = {
  name: "admin",
  pass: "root"
}

const res = Object.assign({}, user, admin)
const resNew = {...user, ...admin, avatar}  // создали новый объект
console.log(res) 
console.log(resNew)

for (let i in user) {    // перебор элементов объекта  
    console.log(i, user[i])
};
  
const x=25;
const y =10;

const coords = {
    x: x,
    y: y,
    calcSq: function() {
      console.log(this.x*this.y)
    }
  }

const coords = { // тоже самое, что выше только короче
  x,
  y,
  calcSq() {
    console.log(this.x*this.y)
  }
}

coords.calcSq();
console.log(coords)

// Деструктруризация объектов

const user = {
  name: "default",
  pass: "qwerty",
  right: "user",
}

const {name, pass, right} = user;
console.log(name,pass, right)

const user = {
  pass: "qwerty",
  right: "user",
  name: {
    first: "smith",
    second: "john"
  }
}

const {name: {first, second}, pass, right} = user;  // деструктуризация объекта внутри объекта
console.log(first, second)

// Используем в функции и деструктуризацию и параметры по умлочанию
const connection = ({   
    host = "local",  // здесь можно задать параметры по умолчанию, если они не приходят
    port,
    user = "alex" 
}) => {
  console.log(`host: ${host}, port: ${port}, user: ${user}`)
};

connection({
   port: 2322,
})

// Деструктруризация массивов

const array = [3,5,6]

//const [a,b,c] = array 
const [, , c] = array // пропускаем ненужные элементы

const newArray = [...array]

//console.log(a,b,c)
console.log(c)
console.log(newArray)

const numbers = [[3,5],[6,6]]
const [[a,b],[c,d]] = numbers;
console.log(a,b,c,d)


const country = {
    name: "England",
    population: 20000,
    gender: {
        male: ["15%", "40%"],
        female: ["16%", "20%"]
    }
}

const {gender: {male:[a,b],female:[c,d]}} = country
console.log(a,b,c,d)