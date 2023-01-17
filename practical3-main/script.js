'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
//let txt = 'я люблю JS!';
//console.log(txt.length);

// Домашнее задание 

// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции: dogYears(myDog, 4); makeTea(guests, 'Earl Grey'); secret();  
// Аргументы: (myDog, 4), (guests, 'Earl Grey'), ()
// Параметры: (dogname, age),  (cups, tea), secret()
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txtone = 'JS';
console.log(txtone.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txttwo = 'я люблю JS!';
console.log(txttwo.substr(2, 5), txttwo.substr(8,2));
console.log(txttwo.substring(2, 7), txttwo.substring(8, 10));
console.log(txttwo.slice(2, 7), txttwo.slice(8, 10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let txtthree = 'я люблю JS!';
console.log(txtthree.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txtfour = '993 986 979 972 965';
let n = 8;
if (txtfour.length > n){
    let result = txtfour.slice(0, n);
    console.log(result +'...');
}
else{
    let result = txtfour;
    console.log(result);
}

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txtfive ='Я-люблю-JS!';
console.log(txtfive.replace((/-/g), '!'));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txtsex ='я люблю JS';
console.log(txtsex.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txtseven = 'привет мир';
console.log(txtseven.split(''));
