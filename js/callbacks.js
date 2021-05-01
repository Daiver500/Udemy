const first = () => {
  // function is doing somehting
  setTimeout(function(){
      console.log(1);
  }, 500);
};

const second = () => {
  console.log(2);
};

first();
second();

// callback это функция которая должна быть выполнена, когда другая функция завершила свое выполнение

const learnJs = (lang, callback) => { //в callback передается функция из вызова
  console.log(`я учу: ${lang}`);
  callback(); //здесь этот callback вызывается и он сработает только после  первого аргумента
};

learnJs("JavaScript", function() { //передача в callback анонимной функции
  console.log ("я прошел урок");
});

const done = () => {
    console.log ("я прошел урок"); // передача в callback функции
};

learnJs("JavaScript", done); //передача в callback функции