const now = new Date("2021-07-20");  // покажем текущую дату, обычно берется из системы
console.log(now);
console.log(now.getFullYear());  // получение года, год всегда передается в 4х цифрах
console.log(now.getMonth());  
console.log(now.getDate());  
console.log(now.getDay());  // номер дня недели, начинается с воскресенья
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());  // разница между часовым поясом и UTC
console.log(now.getTime());  // количество милисекунд с 01.01.1970

// const now = new Date(2020, 5, 1, 20)  год, месяц (месяцы считаются с нуля), число, часы (будут показаны за вычетом часового пояса. у нас +3)

// const now = new Date(0)  милисекунды ведут отсчет с 01.01.1970, любую дату можно трансформировать в милисекунды
// const now = new Date(-66666) чтобы получить дату до 1970 милисекунды указываются с -

const nowNew = new Date("2020-05-01");
new Date.parse("2020-05-01"); // тоже самое, что и выше строчкой
console.log(nowNew.setHours(18, 40)); // все методы с set устанавливают параметры, первый аргумент часы, второй минуты
console.log(nowNew); 

let start = new Date ();

for (let i = 0; i <100000; i++) {
  let some = i ** 3;   // ** возводит в степень
}

let end = new Date ();

alert(`bla bla bla ${end - start} bla bla bla`);