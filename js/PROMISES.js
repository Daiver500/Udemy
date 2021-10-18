"use strict"

console.log("Запрос данных ...")

const req = new Promise((resolve, reject) => {       // в промис передается два аргумента resolve (успех), reject (не удача)
  setTimeout(() => {
      console.log("Подгтовка");

      const product = {
          name: "TV",
          price: 2000
      };

      resolve(product);               // удачное выполнение
  }, 2000);
});

req.then((product) => {           // then выполняется после resolve
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          product.status = "order";
          resolve(product);
      }, 2000)
  });
}).then((product) => {               // так как ранее вернулся через return новый promise его можно обработать далее с then
    product.modify = true;
    return product;
}).then((product) => {
    console.log(product)
})