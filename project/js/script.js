/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvertisement = document.querySelectorAll(".promo__adv img");
const promoGenre = document.querySelector(".promo__genre");
const promoBackground = document.querySelector(".promo__bg");
const moviesList = document.querySelector(".promo__interactive-list");

promoAdvertisement.forEach((item) => {
    item.remove();
});
promoGenre.textContent = "Драма";
promoBackground.style.cssText = "background-image: url(img/bg.jpg)";

moviesList.innerHTML = "";
movieDB.movies.sort();

//const newElement = document.createElement("li");
//newElement.classList.add("promo__interactive-item");
//newElement.textContent = movieDB.movies[2];
//moviesList.prepend(newElement);



movieDB.movies.forEach((item, i) => {
  moviesList.innerHTML += `<li class="promo__interactive-item">${i+1 + "."} ${item}
  <div class="delete"></div>
</li>`;
});

//i в вышеуказанном случае это нумерация, + 1 для того. чтобы список начинался с 1, а не с 0, так как в массивах идет нумерация с 0;

//a = a + 1;
//a += 1;  //тоже самое, что и верх

//a = a + "aaa";
//a += "aaa"; //тоже самое, что и верх