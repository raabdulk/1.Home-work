// Задание 1

// let str = 'СтРоКА';
// str = str.toUpperCase();
// console.log(str)

// Задание 2

// const words = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';

// words.forEach((word) => {
//     if (word.toLowerCase().includes(search.toLowerCase())) {
//         console.log(word);
//     }
// });

// Задание 3

// Math.floor(32.58884);
// Math.ceil(32.58884);
// Math.round(32.58884);

// Задание 4

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * maxValue);
// }
// console.log(getRandomInt(1, 10));

// Задание 6

// function getRandomArrNumbers(length = Number(prompt("Введите число"))) {
//     let len = Math.floor(length / 2);
//     return Array.from((Array(len)), () => Math.floor(Math.random() * length) + 1);
// }

// const arr = getRandomArrNumbers();
// console.log(arr);

// Задание 7

// function getRandomInt(minValue = Number(prompt("Введите число")) , maxValue = Number(prompt("Введите число"))) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }

// console.log(getRandomInt());

// Задание 8

// let currentDate = new Date ();
// console.log(currentDate);

// Задание 9

// let myDate = new Date ();
// console.log(+myDate);

// let days73 = 73 * 24 * 60 * 60 * 1000;
// console.log(days73);

// let searchDate = +myDate + days73;
// console.log(searchDate);

// let daysAfter73 = new Date (searchDate);
// console.log(daysAfter73);

// Задание 10

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function currentDate() {
//     let myDate = new Date();
//     fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
//     " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
//     console.log(fullDate);

//     fullTime = "Время: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();
//     console.log(fullTime);
// }

// currentDate();

// Задание 11

// function game() {

//     let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

//     arr = arr.sort(() => Math.random() - 0.5);
//     alert(arr);

//     let first = prompt("Чему равнялся первый элемент массива?");
//     let last = prompt("Чему равнялся последний элемент массива?");
//     if (first == arr[0] && last == arr[6]) {
//         alert("Поздравляем! Вы угадали оба элемента")
//     } else if (first == arr[0] || last == arr[6]) {
//         alert("Вы были близки к победе!")
//     } else {
//         alert("Все ответы неверные")
//     }

// } ?