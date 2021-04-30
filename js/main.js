let numberOfFilms;

const start = () => {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};
start ();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const rememberMyFilms = () => {
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
  }
};
//rememberMyFilms();


const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 || personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else {
    console.log("Вы киноман");
  }
};
//detectPersonalLevel();

const showMyDatabase = (hidden) => {
  if (!hidden) {
    console.log(personalMovieDB);
  } else {
    console.log("preved");
  }
};
showMyDatabase(personalMovieDB.privat);

const writeYoureGenres = () => {
  for (let i = 1; i <= 3; i++) {
     const genre = prompt (`Ваш любимый жанр под номером ${i}`); // Вставка в строку работает только в бэктиках
     personalMovieDB.genres[i - 1] = genre; // если не испольховать i - 1, то первый элемент массива будет пустой empty
  }
};
writeYoureGenres();