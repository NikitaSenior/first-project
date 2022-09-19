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

// const num = 50;

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

// let star = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         star +='*';
//     }
//     star +='\n';
// }
// console.log(star);

// При помощи цикла for вывести числа от 20 до 10 в консоль. 
//В обратном порядке (20, 19, 18...). 
//Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, 
// как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];
// let arrIndeks = 0;

// for(let i = 5; i <=10; i++) {
//     console.log(i);
//     arrayOfNumbers[arrIndeks] = i;
//     arrIndeks++;
// }  
// console.log(arrayOfNumbers);


// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const resultq2 = [];

// for (let index = 0; index < arr.length; index++) {
//     resultq2.push(arr[index]);
// }
// console.log(resultq2);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let index = data.length-1; index >= 0; index--) {
//     result.push(data[index]);
    
// }

// console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********



// const lines = 5;
// let result = '';

// for (let i = lines; i >= 0; i--) {

//     for (let j = i-1; j >= 0; j--) {
//         result += 's';
//     }
//     for (let k = i; k <= lines; k++) {
//         result += '*';
//     }
//     for (let k = i+1; k <= lines; k++) {
//         result += '*';
//     }


//     result += '\n';
// }

// console.log(result);


// const lines1 = 5;
// let result2 = '';

// for (let i = 0; i <= lines1; i++) {
//     for (let j = 0; j < lines1 - i; j++) {
//         result2 += "s";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result2 += "*";
//     }
//     result2 += "\n";
// }

// console.log(result2);






// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++){
//     const a = prompt("Один из последний просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//           personalMovieDB.movies[a] = b;
// }
// console.log(personalMovieDB);





// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++) {
//     const a = prompt("Один из последний просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//     if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }
// console.log(personalMovieDB);

// if(personalMovieDB.count < 10) {
//     console.log("go watch films");
// } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31){
//     console.log("good");
// }else if (personalMovieDB.count > 30){
//     console.log("Are you maniak?");
// } else {
//     console.log("error");
// }





// let a = '';

// while(a === '') {
//     a = prompt("Один из последний просмотренных фильмов?", "");
//     if (a.length) {
//     break;
//     }
// }




// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 

// В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.




// function sayHello(personName) {
//     return "Привет, " + personName + "!";
// }

// console.log(sayHello("Nik"));





// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 

// одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


// function returnNeighboringNumbers(argg) {
//     return  [argg-1, argg, argg+1];
// }
// console.log(returnNeighboringNumbers(1));





// function getMathResult(baza, progrCaunt) {
//     if(typeof progrCaunt !== 'number' || progrCaunt <= 0) {
//         return baza;
//     } 
//     let result = baza + '---';
//     let bazaPC = baza;
//     for (let i = 0; i < progrCaunt-1; i++) {
//         bazaPC += baza;
//         result += bazaPC; + '---';
//         if(i < progrCaunt-2) {
//             result += '---';
//         }
//     }
//     return result;
// }

// console.log(getMathResult(5,4));


const fruit = "Some fruit";

console.log(fruit.indexOf("f"));
















