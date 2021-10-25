'use strict';

// filter фильтрует элементы внутри массива (возвращает новый массив)

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter((name) => { 
    return name.length < 5;
  });   
  
console.log(shortNames)


// map позволяет изменить каждый элемент внутри массива (возвращает новый массив)

const answers = ["iVan", "AnnA", "Hello"];

const result = answers.map((answer) => {   // создали новый массив
    return answer.toLowerCase();
})

console.log(result)

let answers = ["iVan", "AnnA", "Hello"];  // изменили исходный массив (так делать не стоит)

answers = answers.map((answer) => {
    return answer.toLowerCase();
})

// every (перебирает массив и если все элементы подходят, то вернет true) /some (перебирает массив и если какой-то элемент подходит, то вернет true)       

const some = [4, "qaf", "fasfaf"];

console.log(some.some((item) => {
    return typeof(item) === "number"
}));

console.log(some.every((item) => {
    return typeof(item) === "number"
}));

//  reduce (собирает массив в единое целое, перебирает массив). У метода есть два аргумента (автоматических), первый это сумма всех элементов (равен 0 перед первым перебором массива), 
// второй аргумент приводит из массива первый элемент, после этого идет сложение 0 + 4 (ниже массив как пример), на следующей стадии перебора первый элемент это уж 4
// который складывается со следующим элементов (4 + 5)
// reduce возвращает новый массив


const array = [4, 5, 1, 3, 2, 6]; 

const result = array.reduce((summ, current) => {
    return summ + current                               
}, 3);                                // можно передать стартовое значение вместо 0, в данном примере цифра 3

console.log(result)

const arr = ["apple", "pear", "plum"];       // можно применять и со строками

const res = arr.reduce((summ, current) => {
    return `${summ}, ${current}`
});

console.log(res)

// пример

const obj = {
  ivan: "person",
  ann: "person",
  dog: "animal",
  cat: "animal"
}

const newArray = Object.entries(obj)  // делаем массив массивов из объекта

.filter((item) => {
    return item[1] === "person";
})
.map((item) => {
    return item[0];
})
console.log(newArray )