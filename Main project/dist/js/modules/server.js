// SERVER GET/POST FETCH API JSON

const server = () => {
  
  /*axios.get("http://localhost:3000/menu")                        // AXIOS служит для обращения к серверу (GEt\POST) без создания дополнительных функций
  .then(data => {
    data.data.forEach(({img, altimg, title, descr, price}) => {       
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render()   
    });
  });*/
  
  const forms = document.querySelectorAll("form");
    const  message = {                         // создаем объект с текстовыми сообщениями
      loading: "img/spinner.svg",
      success: "Спасибо и до свидания",
      error: "Ошибка"
    }
                       
    const postData = async (url, data) => {          // внутри функции будет асинхронный код, async и await всегда используются в паре
      const result = await fetch(url, {              // здесь дожидаеся ответа await 
        method: "POST",                          // отправляем информацию
          headers: {
            "Content-type": "application/json "       //заголовки нужны для отправки JSON
          },
          body: data                                  // фукнцию postData можно испольоваться как универсальную с различными аргументами
      });
  
      return await result.json()
    }
  
    const bindPostData = (form) => {
      const formSendingHandler = (evt) => {
        evt.preventDefault();
       
        const statusMessage = document.createElement("img");    // создаем новый элемент с текстовым сообщением и добавляем его на страницу
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `  
          margin: 0 auto;
          display: block;         
        `;                                                                   // CSS стили пропишем inline
        form.insertAdjacentElement("afterEnd", statusMessage);              // вставляем элемент после формы
        
        const formData = new FormData(form);   // собираем данные из формы, которые будем отправлять, как аргумент передается форма с которой собираем данные
                                               // !!! в html всегда обязательно указывать артрибут name="name" для интерактивных полей (input, textarea и т.д.) иначе FormData не найдет его !!!
  
        /*const object = {};                        
          formData.forEach(function(value, key) {  // ДЛЯ JSON  перебираем formData и формируем новый объект, так как JSON не примет formData другим образом
            object[key] = value;
        })*/                                        // заменили на способ ниже
  
        const json = JSON.stringify(Object.fromEntries(formData.entries())); // превращаем formData в массив массивов, затем в классический объект и затем в json
  
        //  Object.entries(obj) преобразует объект в массив массивов [key, value]
        //  Object.fromEntries(array); преобразует массив в объект
  
        /*fetch("server.php", {                     // обращаемся к серверу, вынесли это в отдельную функцию PostData
          method: "POST",                          // отправляем информацию
          headers: {
            "Content-type": "application/json "       //заголовки нужны для отправки JSON
          },
          body: json                             // сюда передаем json
        })*/
        postData("http://localhost:3000/requests", json)  // ДЛЯ JSON подготтавливаем данные для сервера
        .then(data => {                             // с сервера вернется какая-то информация
          console.log(data);
          showThanksModal(message.success);                                       
          statusMessage.remove();                      // удаляем сообщение через 2 секунды
        }).catch(() => {
          showThanksModal(message.error);                // если внутри fetch promise попадает на ошибку (404, 502 и т.д.), то reject не будет и promise выполниться, ошибка сработает только при отсутствии интернета
        }).finally(() => {
          form.reset();                              // очистка формы, также можно взять инпуты и сделать их value === "";
        })   
      }
      const hideModalWindow = window.modal.hideModalWindow;
      form.addEventListener("submit", formSendingHandler)
      form.addEventListener("submit", hideModalWindow)
    }
  
    forms.forEach((item) => {   // для каждой формы запускаем функцию postData и передаем в нее как аргумент форму
      bindPostData(item);
    });
   
    const showThanksModal = (message) => {                                    // сюда передаем как аргумент сообщение пользователю из объекта message
      const thanksModal = document.createElement("div");                      // создаем новую начинку модального окна для сообщения пользователю
      thanksModal.classList.add("modal__message");           
      thanksModal.innerHTML = `
      <div class="modal__dialog">
        <div class="modal__content">
          <div class="modal__close" data-close>×
          </div>
          <div class="modal__title">${message}</div>
        </div>
      <div>
      `; 
      document.querySelector(".page").append(thanksModal);            // добавляем в модальное окно новое наполнение
      setTimeout(() => {                                               // через определенное время удаляем сообщение пользователю и возвращаем обратно возможность вызвать и отправить форму
        thanksModal.remove();
      }, 4000)
      const modalMessage = document.querySelector(".modal__message");
      const modalClose = modalMessage.querySelector(".modal__close");
      const closeThanksModal = () => {
        thanksModal.remove();
      }
      modalClose.addEventListener("click", closeThanksModal);
    }      
  
    fetch("db.json")
      .then(data => data.json())
      .then(result => console.log(result))
}
module.exports = server;