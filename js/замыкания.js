// замыкание возникает когда мы из одной функции возвращаем новую функцию

function counter() {
    let count = 0;
    return function () {                // эта функция замкнута на область видимости родителя
      return count ++;
    }
 }
 
 const newCounter = counter()
 const anotherCounter = counter()
 
 console.log(newCounter())
 console.log(newCounter())
 console.log(newCounter())

 // каждый раз при вызове newCounter (или anotherCounter) создается новая область видимости с новой переменной count

 console.log(anotherCounter())
 console.log(anotherCounter())
 console.log(anotherCounter())

 // каждая из этих функция замкнута на свою область видимости

