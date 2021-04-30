// Такая функция существует еще до того как ее объявили. Можно вызвать до объявления.

function showFirstMessage (text) {
  console.log(text);
}

showFirstMessage("Hello world");

// Возвращаение значения c помощью return

function calc (a, b) {
    return (a+ b);
}

console.log(calc(4,3));
console.log(calc(5,8));

// Можно вызвать только после объявления

const name = function () {};

// Стрелочная функция (самая современная)

const surname = () => {};