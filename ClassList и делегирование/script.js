 const btns = document.querySelectorAll("button");

 console.log(btns[0].classList.length);  // проверяем количество классов у элемента
 console.log(btns[0].classList.item(0)); // получаем первый класс у первого элемента 
 console.log(btns[1].classList.add("red"));  //добавляем класс элементу, можно добавлять несколько классов через запятую
 console.log(btns[0].classList.remove("blue"));  //удаляем класс элемента
 console.log(btns[0].classList.toggle("blue"));  //переключаем класс\

 if (btns[1].classList.contains("red")) {    //проверка на наличие класса 
   console.log("red");
 }

 btns[0].addEventListener("click", () => {
     if(!btns[1].classList.contains("red")) {
         btns[1].classList.add("red");              // тоже самое можно сделать через classList.toggle
     } else {                                       // btns[1].classList.toggle("red");
         btns[1].classList.remove("red");
     }
 });

 const btnsWrapper = document.querySelector(".btn-block"); // ниже делегирование событий

 btnsWrapper.addEventListener("click", (evt) => {  
     btns.forEach((item) => {
        if(evt.target === item) {
            console.log("Hello");
          }
     });
 });

btnsWrapper.addEventListener("click", (evt) => {  
    if(evt.target && evt.target.tagName === "BUTTON") {
      console.log("Hello BRO");
  }
});

btnsWrapper.addEventListener("click", (evt) => {  
    if(evt.target && evt.target.matches("button.red")) {
      console.log("Hello BRO");
  }
});


btnsWrapper.addEventListener("click", (evt) => {  
    if(evt.target && evt.target.classList.contains("blue")) {
      console.log("Hello world");
  }
});

const btn = document.createElement("button");
btn.classList.add("red");
btnsWrapper.append(btn);
