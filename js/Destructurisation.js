const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red"
  },
  makeTest: function () {
      console.log("test");
  }
};

options.makeTest();

const {border, background} = options.colors; //деструктуризация 
console.log(border);

//console.log(options.name);  //обоащение к ключу объекта

//delete options.name; //удаление

//console.log(options);

let counter = 0;

for (let key in options) {        //перебор свойств объекта, будет срабатывать столько раз сколько свойств в объекте for in
  if(typeof(options[key]) === "object") {
    for (let i in options[key]) {
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter ++;
    }
} else {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
  counter ++;
 }
}
console.log(counter);

//console.log(options["colors"]["border"]); //доступ к значению объекта внутри другого объекта

console.log(Object.keys(options)); //Получение всех свойств объекта в виде массива
console.log(Object.keys(options).length); //Получение длинны массива
