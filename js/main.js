const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из просмотренных фильмов?", "");
  const b = prompt("На сколько бы вы оценили его?", "");

  if (a !== null && b !== null && a !== "" && b !=="" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--; 
  }
  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 || personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else {
  console.log("Вы киноман");
}