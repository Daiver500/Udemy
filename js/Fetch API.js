
  // API // набор данных и возможностей, который предоставляет нам какое-то готовое решение
  // FETCH API
  fetch("https://jsonplaceholder.typicode.com/posts", {   // в скобки помещается тот url на который мы будем делать GET или POST запросы, из данной конструкции нам возвращается Promise
    method: "POST",                                         // отправляем данные
    body: JSON.stringify({name: "Alex"}),           // отправим объект с помощью FETCH
    headers: {
      "Content-type": "application/json"
    }                   
  })      
  .then(response => response.json())        // здесь получаем ответ в json формате и далее трансформируем его в обычный объект с помощью response.json, здесь возвращается Promise
  .then(json => console.log(json))    