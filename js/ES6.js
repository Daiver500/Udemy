"use strict"

// EXPORT (файл main.js)

export let one = 1;

let two = 2
export {two}

export default function sayHi() {   // то что экспортируется по умолчанию, может быть только один
   console.log("Hi")
}

//IMPORT (файл script.js)

import {one, two} from "./main"  // здесь пишем из какого файла идет экспорт
import {one as first} from "./main" // можно переименовывать значения
console.log(`${one} and ${two}`)  // такие файлы также нужно чем-то собирать (webpack), так как браузер не умеет сам

import * as data from "./main"  // можно импортировать все данные сразу
console.log(`${data.one} and ${data.two}`) // таким образом мы можем обратиться в данным при импорте всего файла

import sayHi from "./main"  // импорт значения по умолчанию

// CONNECTION TO THE PAGE

//В HTML файле можно подключить без сборки

// <script type="module" src="js/main.js"></script>       // сначала файл откуда экспорты
// <script type="module" src="js/regular.js"></script>    // затем файл куда импорты

// при этом обязательно в импортах прописываем JS в файлах import {one, two} from "./main.js"