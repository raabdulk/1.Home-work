// Задание 1

// function minNumber(number1, number2) {
//   if (number1 < number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }

// minNumber(10, 2);
// minNumber(111, 234);
// minNumber(200, 122);
// minNumber(6, 6);

// Задание 2

// function evenNumber(num) {
//   if (num % 2 == 0) {
//     return ('Число четное');
//   } else {
//     return ('Число нечетное')
//   }
// }

// evenNumber(10);
// evenNumber(11);

// Задание 3

// function number(num) {
//   let sn = num * num
//   console.log(sn)
// } 

// number(11);
// number(3);
// number(5);

// function sqNumber(num) {
//   return num * num;
// }

// sqNumber(10);
// sqNumber(2);
// sqNumber(4);

// Задание 4

// askAge(prompt('Введите свой возраст'))
// function askAge(age) {
//   if (age < 0) {
//     alert("Вы ввели неправильное значение");
//   } else if (age >= 0 && age <= 12) {
//     alert("Привет, друг!");
//   } else {
//     alert("Добро пожаловать");
//   }
// }

// Задание 5

// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// multNumber(a, b)

// function multNumber(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a * b;
//     }
// }

// Задание 6

// let a = prompt("Введите число")
// correctNumber(a)
// function correctNumber(a) {
//     if (isNaN(a)) {
//         return "Переданный параметр не является числом"
//     } else {
//         return `a в кубе равняется ${a * a * a} `
//     }
// }

// Задане 7

// function getCircleArea() {
//     return 3.14 * (this.radius * this.radius)
// }

// function getCirclePerimeter() {
//     return 2 * 3.14 * this.radius
// }


// let circle1 = {
//     radius: 10,

//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }

// let circle2 = {
//     radius: 5,

//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());