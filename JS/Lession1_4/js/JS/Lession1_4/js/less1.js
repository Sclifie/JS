// однострочный комментарий
/* многострочник */
'use strict'; // ИНСТРУКЦИЯ каждая инструкция заканцивается ; и начинается с новой строки
console.log('less01', 'takemeinfo'); // Отладка
var varName; // объявление переменных буквы, цифры(но не в начале переменной)

varName = 45; // присвоение переменной значения
varName = 'new value'; // переопределение значения переменной
console.log(window);
let varNameSecond = 30;
let varClientName;  //используется внутри блоков кода, имирает когда заканчивается блок

//типы данных - простые и составные
//!простые
let str = "Строковый тип данных/n на две строки и \"прямой речью\"";
// Для вывода на след. строку использовать /n

// str = '56';

console.log("str:", str);
// Логический тип

let boolean = true;
let boolean2 = false;

// К False преобразуется
/*
0
""
null
undefined
*/

// console.log(0 == false);
// console.log(" " == false);
// console.log("" == false);

// Числа отрицательные положительные и 0 бесконечности
//
// isNaN(varNamesecond);
// true - если значение является численным или не может быть преобразовано в число
// false
console.log("56", isNaN(56));
console.log("'56'", isNaN('56'));
console.log("56", isNaN(56));
console.log("qwe", isNaN(true));
console.log('qwe', isNaN(false));

//null
//undefined

let nullVar = null;
let udefined = undefined; // правильная запись let varName;
let text  = "текст";
// typeof nullVar;

console.log("Тип переменной", typeof nullVar);
console.log("Тип переменной", typeof boolean);
console.log("Тип переменной", typeof varNameSecond);
console.log("Тип переменной");
console.log("тип переменной", typeof text);

//Операторы
//Арифметические операторы +  - * / "%" - деление по модулю

console.log('56' - 9);
console.log('trhbv' - 9);
console.log('thdh' + 9);
// Континуация склеивание данных с + если данные невозможно сложить
console.log('0.1 + 0.2 рАвно', (0.1 + 0.2)*10/10 );
console.log(9999999999999999);

//операторы присваивания
//= присваивание
//+= -= *= /= %=

let a = 30;
// a = a + 10;
// a +=10; одинаковые записи

// оператор сравнения == равенство
// != неравенство
// === идентичность
// != не идентичность
console.log('==', 0 == false);
console.log('===', 0 === false);
// >
// <
// >= юольше или равно
// <= меньше или равно

console.log('Три меньше 6?',3 < 6);
// инкремент и декремент
// ++a - префиксный инкремент
// a++ - постфиксный инкемент
// --a - префиксный декремент
// a-- постфиксный декремент
let x = 9;
let y = 1;

console.log(++x);
console.log(x++);
console.log(--y);
console.log(y--);

//тернарный оператор "?"
// условие ? значиение1 : значение2
// если условие верно(true), вернёт значение1, если не верно вернёт (false);

let uslovie = 3;
let uslovie2 = 5;
let result = uslovie < uslovie2 ? "Бравно!ТЫ прав!" : "Плохо считаешь";
console.log("3 меньше 5?", result);

let now = new Date();
console.log("Точное московсоке", now);
let sec = now.getSeconds();
console.log("точное секундное", sec);
let month = now.getMonth();
console.log("Месяц", month);

// Домашнее задание В начале каждого часа
// в течении трёх минут горит зелёный сигнал
// затем в течении одной минуты - желтый
// затем в течении одной минуты - красный
// какой цвет горит в данный момент времени

//
/*
0 1 2

 */

let res = sec%5 >= 0 && sec%5 < 3 ? "green" : sec%5 === 3 ? "yello" : "red";

console.log("Наш цвет", res);
console.log("%c%s", "color:")

// Простые типы данных, остаток от деления, false true undefined true инкременты и декременты
// задачи в ВК



