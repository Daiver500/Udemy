'use strict';

/*localStorage.setItem("number", "5");        // передаем данные в виде ключ значение

localStorage.getItem("number");         //получаем данные

localStorage.removeItem("");    // удаляем

localStorage.clear()           // полностью очищаем
console.log(localStorage.getItem("number"));*/

const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const button = document.querySelector("#color");

if(localStorage.getItem("isChecked")) {                // проверяем есть ли зачение isChecked, если да тогда чекбокс checked
   checkbox.checked = true;
}

if(localStorage.getItem("bg") === "changed") {       // при заходе на страницу проверяем есть ли такая запись на странице
    form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);            // по изменению состояния чекбокса задаем состояние isChecked
})

button.addEventListener("click", () => {
    if(localStorage.getItem("bg") === "changed") {        // если есть changed меняем цвет на белый
        localStorage.setItem("bg", "notChanged");                        // меняем значение ключа bg
        form.style.backgroundColor = "white";
    } else {
        localStorage.setItem("bg", "changed");              // задаем значение changed и меняем цвет на красный
        form.style.backgroundColor = "red";
    }
})

const person = {
  name: "Alex",
  age: 25
}

const serializedPerson = JSON.stringify(person)       // превращаем данные в JSON формат
localStorage.setItem("alex", serializedPerson);
console.log(JSON.parse(localStorage.getItem("alex")))