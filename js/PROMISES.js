"use strict"

console.log("Запрос данных ...")

const req = new Promise((resolve, reject) => {       // в промис передается два аргумента resolve (успех), reject (не удача), выполнится может только один resolve/reject
  setTimeout(() => {                                 // все остальные после работать не будут
      console.log("Подготовка");

      const product = {
          name: "TV",
          price: 2000
      };

      resolve(product);               // удачное выполнение
  }, 2000);
});

req.then((product) => {           // then выполняется после resolve, сюда передается результат resolve(product)
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          product.status = "order";
          resolve(product);
          // reject();                  // тут обрабатываем ошибку
      }, 2000)
  });
}).then((product) => {               // так как ранее вернулся через return новый promise его можно обработать далее с then
    product.modify = true;
    return product;
}).then((product) => {
    console.log(product)
}).catch(() => {                  // ловим ошибку здесь, это выполнится при ошибке reject
   console.error("Ошибка")
}).finally(( )=> {                // действия, которые должны быть произведены всегда
   console.log("finally")
})             

const test = (time) => {
  return new Promise(resolve =>{
    setTimeout(() => {
     resolve()
    }, time)
  })
}
test(1000).then(() => {
  console.log("1000 ms")
})
test(2000).then(() => { 
  console.log("2000 ms")
})

Promise.all([test(1000), test(1000)]).then(() =>{         // принимает в себя массив с промисами, ждет окончания всех промисов и потом что-то выполняет   
    console.log("All")
})  

Promise.race([test(1000), test(1000)]).then(() =>{         // нужно определить какой из промисов выполнится первым и какие действия пойдут, ждем выполнения только самого первого промиса
    console.log("All")
})                