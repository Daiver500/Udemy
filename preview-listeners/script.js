const btn = document.querySelector("button");

//btn.onclick = () => {  //Почти не используется
  //console.log("111");
//};

//Первый вариант вызова события (события в JS выполняются в порядке очереди)

btn.addEventListener("click", () => {
  console.log("Hi");
});

//Второй вариант вызова события

const test = () => {
    console.log("Hello world");
};
  
btn.addEventListener("click", test);

//Третий вариант через evt 

btn.addEventListener("click", (evt) => {
   if(evt.target === btn) {
    console.log("Hello");
   }
});

//Четвертый вариант через evt 

const escapeHandler = (evt) => {
  if(evt.key === "Escape") {
    btn.classList.toggle("overlay");
  }
}

document.addEventListener("keydown", escapeHandler);

// Удаление обработчика 

document.removeEventListener("keydown", escapeHandler);

// 

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", (evt) => {
    if(evt.currentTarget === overlay) {
     console.log("Overlay");
    }
 });

 // Всплытие 

// Можно навешивать обработчик событий на родителя дочерних элементов

const link = document.querySelector("a");

// Отменить стандартное действие браузера (помещается в самое начало обработчика, чтобы отменить стандартное действие)

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(evt.target);
});

//Обработчики событий для нескольких элементов, в данном случае срабатывает один раз

const allButtons = document.querySelectorAll("button");

allButtons.forEach((item) => {
  item.addEventListener("click", test, {once:true});
});