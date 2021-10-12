"use strict"
// AJAX нужен для отправки http запросов и получения информации с сервера. Асинхронное действие без перезагрузки страницы
// AJAX запросы по умолчанию асинхронные 

// Старая информация 

const inputRub = document.querySelector("#rub");
const inputUSD = document.querySelector("#usd");

const serverRequest = () => {
  const request = new XMLHttpRequest();  // новый запрос http
  request.open("GET", "js/current.json");  
  // request.open(method, url, async, login, password);
  // open собирает настройки для запроса, method - что мы делаем (GET - получаем, POST - отправляем и т.д.)
  // далее url это путь к информации (может быть ссылка, файл и т.д.)
  // далее async отвечает за асинхронность операции (можно поставить false)
  // некоторые запросы можно делать только если у нас есть логин и пароль
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  // при отправке запрос нужно сказать серверу, что мы отправляем, что за информация
  // как она закодирована, чтобы сервер понимал, что он принимает в себя
  // http заголовки
  request.send();
  // отправляем информацию, в зависимости от метода GET или POST заполняется по разному 
}

inputRub.addEventListener("input", serverRequest )