/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






// start();
// rememberMyFilms();
// detectPersonalLevel();
//qqqconsole.log(personalMovieDB);

writeYourGenres();
showMyDB();




function showMyDB() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}





function writeYourGenres() {
    
    for(let i = 0; i <3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жарн под номером ${i+1}`, '');
    }


}











function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    }
}





function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {

            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Классический зритель");
    }   else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("произошла ошибка");
    }
}























