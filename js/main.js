
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count === "" || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 || personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else {
      console.log("Вы киноман");
    }
  },
  showMyDatabase: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log("preved");
    }
  },
  toggleVisibleMyDB: () => {
    if(personalMovieDB.privat){ 
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYoureGenres: () => {
    for (let i = 1; i <= 3; i++) {
       let genre = prompt (`Ваш любимый жанр под номером ${i}`); // Интерполяция работает только в бэктиках (вставка в строку значения)
       if (genre === "" || genre == null) {
          console.log("Вы ввели не то");
          i--;
       } else {
        personalMovieDB.genres[i - 1] = genre; // если не испольховать i - 1, то первый элемент массива будет пустой empty
       }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};
