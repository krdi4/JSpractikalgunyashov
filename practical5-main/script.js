'use strict';
// Задача 1 дз
function buttonClickone(){
    let elem = document.getElementById('elem');
    elem.innerHTML = "Ку-ку! А я <b> жирный </b>";
}
// Задача 2 дз 
function buttonClicktwo(){
    let elem = document.getElementById('elemtwo');
    elem.innerHTML = 'Абзац превратился в h3!';
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}
// Задача 3 дз
function buttonClickthree(){
    let elem = document.getElementById('elemtthree');
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}
// Задача 5 дз
  function buttonClickfive(){
    let elems = document.getElementsByTagName('p');
    for ( let s = 0; s < elems.length; s++){
        elems[s].innerHTML = s;
    };
};
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClickone(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }