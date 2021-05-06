let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
};

const copy = obj; // Здесь мы передаем значение по ссылке!!! на obj. Это не копия obj, а ссылка, таким образом меняя данные тут, мы меняем данные в оригинале

copy.a = 10; //Заменяя данные тут мы меняем их в оригинале obj, то есть a = 10, а не 5

console.log(copy);
console.log(obj);

// Передача по значнию идет для примитивных типов данных (числа, значения)
// Передача по ссылке идет для объектов (через передачу по ссылке, если в копии меняем данные они меняются в оригинале, для того,
// чтобы в копии менять данные и не затрагивать оригинал надо копировать объект, создавая новый объект)

// Копирование объектов через функцию (создание нового объекта для его изменения)

const copyObj = (mainObj) => {
  let objCopy = {};
   for (let i in mainObj) {
    objCopy[i] = mainObj[i];
  }
  return objCopy;
};

const numbers = {
  a:2,
  b:5,
  c: {
    x:7,
    y:4
  }
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 9; //Сюда снова передается значение по ссылке, так как мы сделали поверхностную копию, не глубокую

console.log(newNumbers);
console.log(numbers);

// Объединение объектов и создание нового объекта Object.assign()

const add = {
  d:17,
  e:20
};

console.log(Object.assign(numbers, add)); //Создание нового объекта из двух
console.log(Object.assign({}, add)); // Создание нового объекта из одного

const clone = Object.assign({}, add); // Новый объект

clone.d = 20;

console.log(add);
console.log(clone);

// Создание нового массива arr.slice()

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); //Создали новый массив

newArray[1] = "d";

console.log(oldArray);
console.log(newArray);

// Spread оператор ES6-ES9 (создание нового массива)

const video = ["youtube", "vimeo", "rutube"];
const blogs = ["wordpress", "livejournal", "blogger"];
const internet = [...video, ...blogs, "vk", "fb"];

console.log(internet);

const log = (a,b,c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

const num = [2,5,7];
log(...num)

// или через деструктуризацию
const [d, e, f] = num;
log(d,e,f);
//

const array = ["a", "b"];
const newArr = [...array];

console.log(newArr);

const g = {
  one:1,
  two:2
};

const newObj = {...g};

console.log(newObj);
