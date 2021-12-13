// tiny-slider библиотека для слайдеров, не использует дополнительных зависимостей

// npm install tiny-slider --save

// <div class="my-slider">  HTML
 //  <div></div>
 //  <div></div>
 //  <div></div>
// </div>

// yourScript.js
import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });

//hammer-JS работает с touch событиями

// https://nisnom.com/ сайт с готовыми решениями