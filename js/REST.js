const log = function (a, b, ...rest) {  // rest оператор записывается всегда последним, который говорит, что здесь может быть бесконечное количество аргументов (назвать можно как угодно)
  console.log(a, b, rest);
};

// rest оператор собирает все оставшиеся аргументы и формирует из них массив

log("basic", "rest", "operator", "usage");

const calcOrDouble = function(number, basis = 2){  //ES6 значение по умолчанию можно задавать прямо в аргументах
  // basis = basis || 2; если значения basis нет, используется число, ES5
  console.log(number*basis);
};

calcOrDouble(3);