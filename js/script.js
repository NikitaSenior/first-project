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

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// let userLastFilm1 = prompt("Один из последний просмотренных фильмов?", "");
// let userLastFilmRaiting1 = prompt("На сколько оцените его?", "");

// let userLastFilm2 = prompt("Один из последний просмотренных фильмов?", "");
// let userLastFilmRaiting2 = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[userLastFilm1] = userLastFilmRaiting1;
// personalMovieDB.movies[userLastFilm2] = userLastFilmRaiting2;
// console.log(personalMovieDB);

const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('big');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49:
//         console.log('Nieprawda');
//         break;
//     case 100:
//         console.log('Nieprawda');
//         break;   
//     case 50:
//         console.log('Nieprawda');
//         break;
//     default:
//         console.log('not in this time');
//         break;
// }

let star = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        star +='*';
    }
    star +='\n';
}
console.log(star);