// 'use strict';
console.log('Функции');

//Именованные функции
// function glagolchtodelaetfuncziya(parametru,parametr2,parametrN) {
//         code...;
//         return vurajenue;
// }
//
// vuzuvaem glagolchtodelaetfuncziya(); //

function printFunction() {
    console.log('PrintSomething', printFunction);
}
printFunction();
function sayHello(user_id, user_pw) {
    console.log('Hello', user_id,'Ваш пароль', user_pw);
}
sayHello('user_id' +
    'user_pw');
function getUsers() {
    for (var i = 0; i < arguments.length; i++)
    {
        console.log('user ' +(i+1), arguments[i]);
    }
}
getUsers('Вася, Гриша, Миша');

// function getNameSurname(name, surname="Фамилия не задана") {
//     surname = surname || 'Фамилия не задана';
//     console.log(name,surname)
// }
// getNameSurname('Ivan','Petroff');
// function sumIt(a,b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         console.log('Сумма', sumIt(a,b){
//             console.log(a + b);
//         };
//         );
//     } else {
//         console.log('Error')
//     }
// }
// sumIt(5,6);
//Анонимные функции
// var eventNum = function(num) {
//     if (num%2 === 0) {
//         return 'четное';
//     } else {
//         return 'нечет';
//     }
// };
// console.log(eventNum(9));
// function pow(x, y) {
//     if (n !== 1){
//     return x*pow(x,y -1);
//     } else {
//         return x;
//     }
// };
// console.log(pow(2, 3));

function blinkMe(argument) {
    var varName;
    function blinkMeTwice() {

    }
};

function counter() {
    var num = 0;
    return function () {
        return num++
    }
}
var count = counter();
//Контекст вызова
var newVarForMe = 'John';
function showName() {
    // 'use strict';
    console.log(this.newVarForMe);
    this.newVarForMe = "New Name";
    console.log(this.newVarForMe);
};
showName();

(function () {
    'use strict';
}());