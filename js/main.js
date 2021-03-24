const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из просмотренных фильмов?", "");
const b = prompt("На сколько бы вы оценили его?", "");
const c = prompt("Один из просмотренных фильмов?", "");
const d = prompt("На сколько бы вы оценили его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);