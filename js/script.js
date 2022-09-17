"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// number = obj.a;

// console.log(obj["a"]);


// let arr = ['erer', 'fdgfgddddd', 6, 'eeeeeee', {}, []];

// console.log(arr);


// const obj2 = {
//     0: 50,
//     3: 30
// };
// console.log(obj2['3']);

// const result = confirm("dfgdfdfgdfg");
// const anwer = prompt("Are youe 18?", "18");
// console.log(anwer);

// const anwers = [];
// anwers[0] = prompt('name', '');
// anwers[0] = prompt('age', '');
// let number = 5;
// console.log(number);

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



let userLastFilm1 = prompt("Один из последний просмотренных фильмов?", "");
let userLastFilmRaiting1 = prompt("На сколько оцените его?", "");

let userLastFilm2 = prompt("Один из последний просмотренных фильмов?", "");
let userLastFilmRaiting2 = prompt("На сколько оцените его?", "");


personalMovieDB.movies[userLastFilm1] = userLastFilmRaiting1;
personalMovieDB.movies[userLastFilm2] = userLastFilmRaiting2;
console.log(personalMovieDB);