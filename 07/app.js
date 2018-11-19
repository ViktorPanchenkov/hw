'use strict';

let a = +prompt('a');
let b = +prompt('b');
let x;


if (a > b) {
    x = a + b / 2 * 4;
} else if (a < b) {
    x = a - b + 2 / b * 4;
} else if (a = b) {
    x = 400;
}

alert('Получилось ' + x);


let dayNum = prompt('Ведите номер дня недели');

switch (+dayNum )  {
    case 1:
        alert( 'Понедельник');
        break;
    case 2:
        alert('Вторник');
        break;
    case 3:
        alert('Среда');
        break;
    case 4:
        alert('Четверг');
        break;
    case 5:
        alert('Пятница');
        break;
    case 6:
        alert('Суббота');
        break;
    case 7:
        alert('Воскресенье');
        break;
    default:
        alert('нет такого дня');
}
