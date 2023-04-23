// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let year = 2007;
alert(year);

// Задание 3
let namejs = "Брендан Эйх";
alert(namejs);

// Задание 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// Задание 5
let result = 2 ** 5
alert(result);

// Задание 6
let d = 9;
let e = 2;
alert(d % e);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
// num++;
num--;
alert(num);

// Задание 8
age = prompt("Сколько вам лет?");
alert(age);

// Задание 9
const user = {
    name: "Rashid",
    age: 36,
    isAdmin: true,
}

// Задание 9.1
user['city of residence'] = 'Istanbul';

// Задание 9.2
user.age = 37;

// Задание 9.3
delete user['city of residence'];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let userName = prompt("Как Вас зовут?")
alert(`Привет,${userName}!`);
