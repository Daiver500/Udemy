/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//const newElement = document.createElement("li");
//newElement.classList.add("promo__interactive-item");
//newElement.textContent = movieDB.movies[2];
//moviesList.prepend(newElement);


//i в вышеуказанном случае это нумерация, + 1 для того. чтобы список начинался с 1, а не с 0, так как в массивах идет нумерация с 0;

//a = a + 1;
//a += 1;  //тоже самое, что и верх

//a = a + "aaa";
//a += "aaa"; //тоже самое, что и верх

document.addEventListener("DOMContentLoaded",() =>  {
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
const form = document.querySelector(".add");
const input = form.querySelector(".adding__input");
const checkbox = form.querySelector("[type='checkbox']");
const MAX__NUMBERS = 21;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let newFilm = input.value;
  const favorite = checkbox.checked;
  
  if (newFilm) {
    if (newFilm.length > MAX__NUMBERS) {
      newFilm = `${newFilm.substring(0, 22)}...`;
    }
    if (favorite) {
      console.log("Ничего не понимаю, сам сделать не смог ничего, все по уроку");
    }
    movieDB.movies.push(newFilm);
    mainSort(movieDB.movies); 
    createMovieList(movieDB.movies, moviesList);
  }
  
  form.reset(); 
});

const deleteAds = (array) => {
  array.forEach((item) => {
    item.remove();
});
};
deleteAds(promoAdvertisement);

const makingChanges = (genre, backgroundPicture) => {
  genre.textContent = "Драма";
  backgroundPicture.style.cssText = "background-image: url(img/bg.jpg)";
};
makingChanges(promoGenre, promoBackground);


const mainSort = (array) => {
  array.sort();
};



const createMovieList = (films, parent) => {
  parent.innerHTML = "";
  mainSort(movieDB.movies);
  films.forEach((item, i) => {
  parent.innerHTML += `<li class="promo__interactive-item">${i+1 + "."} ${item}
    <div class="delete"></div>
  </li>`;
});
document.querySelectorAll(".delete").forEach((item, i) => {
  item.addEventListener("click", () => {
    item.parentElement.remove();
    movieDB.movies.splice(i, 1);
    createMovieList(films, parent);
  });
}); 
};

createMovieList(movieDB.movies, moviesList);

});

 