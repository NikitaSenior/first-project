"use strict";

//найти индекс слова или буквы
const fruit = "Some fruit";
console.log(fruit.indexOf("f"));


//обрезает от символа до символа
//или просто от символа
//или можно ввести отрицательные значения и тогда это будет с конца строки
const logg = "Hello World!";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-6, -1));
console.log(logg);

console.log(logg.substring(6, 11));

//вырезает от символа и длину символов (например с шестого вырезать 6 символов)

console.log(logg+'111111');
console.log(logg.substr(6, 6));

//округлить до найблизшего десятичное число
const testCountNum = 12.2;
console.log(Math.round(testCountNum));


//впереди видит дабл число и отрезает остаток
const testCount1 = "12.2px dgfghf  fhgjhjkhj fgdgfhh";
console.log(parseFloat(testCount1));



