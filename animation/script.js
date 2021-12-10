const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;          // точка отсчета

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);          // сколько кадров будет использоваться в анимации
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

const animationForward = () => {
    pos++;                           // увеличиваем на 1
    elem.style.top = pos + "px";     // изменяем стили инлайн
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(animationForward);       // requestAnimationFrame позволяет запускать функцию в виде анимации и также подстраивает частоту кадров под браузер
    } 
}

const animationBack = () => {
    pos--;                           // уменьшаем на 1
    elem.style.top = pos + "px";     // изменяем стили инлайн
    elem.style.left = pos + 'px';

    if (pos > 0) {
        requestAnimationFrame(animationBack);       // requestAnimationFrame позволяет запускать функцию в виде анимации и также подстраивает частоту кадров под браузер
    } 
}

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); // чтобы запусить по клику надо создать анонимную стрелочную функцию

//let id = requestAnimationFrame(myAnimation);               
//cancelAnimationFrame(id);                                      // таким образом можно останавливать анимацию

function* generator() {                                                           // через функцию генератор запускаем по клику две функции по очереди                                          
  btn.addEventListener('click', () => requestAnimationFrame(animationForward))
  btn.addEventListener('click', () => requestAnimationFrame(animationBack))
}

const start = generator();

start.next()
start.next()