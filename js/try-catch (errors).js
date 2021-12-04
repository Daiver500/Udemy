"use strict"

try {                           // сначала берется весь код внутри try и проверяется на работоспособность, если все ок, то catch игнорируется, если будет ошибка сработает catch
  console.log("normal")
  console.log(a)          // ошибка для проверки
  console.log("result")
} catch (error) {          // сюда приходит ошибка, если будет ошибка выполнится этот блок кода и далее весь остальной код ниже будет работать
  console.log(error.name)   // параметры ошибки
  console.log(error.message) 
  console.log(error.stack)   
} finally {           // код внутри этого кода выполнится всегда

}

// код написанный после этой конструкции также будет работать
console.log("still normal")

// пример ниже на проверку присутствия элемента на странице 

try {
  document.querySelector(".button").addEventListener("click", () => {      // при отсутствии кнопки на странице в консоли не будет ошибки об этом
    console.log("clicked button")
  })
} catch (e) {

}