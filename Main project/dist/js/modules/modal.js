// MODAL

const modal = () => {
const openModalButtons = document.querySelectorAll(".btn_open_modal");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

const modalEscPressHandler = (evt) => {
  if (evt.key === "Escape") {
    hideModalWindow();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target === modal) {
    hideModalWindow();
  }
};

const openModalWindow = () => {
  modal.classList.add("show");
  document.addEventListener("keydown", modalEscPressHandler);
  modal.addEventListener("click", windowClickHandler);
  modalCloseButton.addEventListener("click", hideModalWindow);
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);  // если модальное окно уже было открыто, то обнуляем setTimeout 
};

const hideModalWindow = () => {
  modal.classList.remove("show");
  document.removeEventListener("keydown", modalEscPressHandler);
  modal.removeEventListener("click", windowClickHandler);
  modalCloseButton.removeEventListener("click", hideModalWindow);
  document.body.style.overflow = "visible";
};

openModalButtons.forEach((item) => {
  item.addEventListener("click", openModalWindow);
});

const modalTimerId = setTimeout(openModalWindow, 50000); // запускаем модалку через 5 секунд

const showModalByScroll = () => {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){   // пользователь докрутил до конца страницы (сравниваем видимый контент на странице + сколько уже прокручено со всей высотой скролла)
    openModalWindow(); 
    window.removeEventListener("scroll", showModalByScroll);
   }
};
// {once: true} это заставляет обработчик сработать один раз, но в данном случае не подходит
// сдвинуть колд вправо tab
// сдвинуть код влево shift+tab
window.addEventListener("scroll", showModalByScroll); 

  window.modal = {
    hideModalWindow
  }
}



module.exports = modal;