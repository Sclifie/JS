// != - не равно;
// !== не равно без приведения;

//Массивы - объекты для хранения пронумерованных значений

var arrayName = ['forest','sky','ocean'];
var pictures = ['forest','sky','ocean']; //Xran9ts9 lybue DANNUE 4ere 3ap9tyu (0,1, ... N)
console.log(pictures);

var firstElem = arrayName[0];
var secondElem = arrayName[1];
var thirdElem = arrayName[2];
console.log('Elem1:', firstElem,'Elem2:', secondElem,'Elem3:', thirdElem);
pictures[0] = 'new picture'; // меняем элемент
pictures[3] = 'new Elem'; // добавляем новый елемент
// узнаём длинну массива
var picturesLength = pictures.length; // используем свойство массива - длинна
console.log("Длинна массива", picturesLength);
// объект
// Удаляем последний элемент массива
pictures.pop();
pictures.push('new element');
//Добавляет последний элемент
//Удаляем в начало и добавляем
pictures.shift();
pictures.unshift('kartinka');
var str = 'wall, stone, door';
var arrayStr = str.split(', '); // вносим в массив переменные
console.log(arrayStr);
//Вырезает(удаляет и возвращает) переменные из массива синтаксис (стартовый элемент, количество, данные для вставки в ячейку массива)
pictures.splice(0,1, 'elem1');
//Методы массивов
var numArr = [1,2,3];
numArr.reverse();
console.log(numArr);
//Логические операторы
// Или "||"  ; И "&&" ; Не "!"  ;
var x = 8;
var y = 2;
//(x < y) || (x === y)
//(x < y)
//Конструкторы ветвления
if(x < y){
    y - x;
    //code
    //code
} else if(x > y){
    x - y;//code
}
// оператор выбора switch
// switch(x) {
//     case str:
//     //code of this casenumber1
//     case arrayStr:
//         [defaul code for process]
// }
var str1 ="string";
switch(str) {
    case "string":
        console.log(str1);
        break;
    case "not string":
        console.log(str1);
        break;
    default:
        console.log('Хрен Вам');
        break;
}

// var yearsTime;
// var currentDate = new Date();
// var currentMount = currentDate.getMonth();
// if ((currentMount <= 1) ||
//     (currentMount === 2)) {
//     yearsTime = "winter";
// } else if((currentMount {
//
// }
//Дома сделать switch
// switch (currentMount) {
//     case currentMount = 0:
//         console.log("winder")
//         break;
//         case currentMount
// }
// while(условие) {
// //code
// while cond == true;
//}
// while с предусловием
var pictures = 5;
// Повторение цикла - итерация
while (pictures) {
    pictures--;
    console.log('picture',pictures)
}
//while с постуловием
// do {
//     //code
//     //while cond == true
// } while(cond);

// do {
//     console.log('iteration')
// } while(0);
//
// do {
//     console.log(pictures);
//     pictures--;
// } while(pictures);
var arr = [1,2,3,5,60];
var i = 0;
while (i < arr.length){
    console.log(arr[i]);
    i++;
}
//Цикл FOR сначала начинаем счётчик
for (var j = 0//условие ; j < arr.length // проверка; j++ //) {
    arr[j] += 2;
}

// Задача на дом
var tarelki = 23;
var fairy = 8;
//0.5 средства на одну тарелку
console.log('fairy');