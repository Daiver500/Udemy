// touchstart касание элемента пальцем
// touchmove при каждом смещении пальца срабатывает
// touchend окончание касания элемента пальцем
// touchenter когда ведем пальцем по экрану и попадаем на определенный элемент
// touchleave когда ведем пальцем по экрану и уходим с определенного элемента
// touchcancel покидаем бразуер

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");         
    box.addEventListener("touchstart", (evt) => {
        evt.preventDefault();         //при использовании мобильного события рекомендуется evt.prevetnDefault;
        console.log("Start");
        console.log(evt.touches);
        console.log(evt.targetTouches);
    });

    box.addEventListener("touchmove", (evt) => {
        evt.preventDefault();       
        console.log(evt.targetTouches[0].pageX);   // получаем координаты
    });

    box.addEventListener("touchend", (evt) => {
        evt.preventDefault();        
        console.log("End");
    });
  });

  // touches выдает список всех пальцев пользователя на экране
  // targetTouches выдает список всех пальцев на конкретном элементе
  // changedTouches список пальцев, которые участвую в текущем событии, пальцы, которые уже совершили определенное действие  