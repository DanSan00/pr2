"use strict";

let name = "John";
let admin = (`${name}`);

alert (`Name ${admin}`);


let name = prompt('Как навзывается ВАШ город');
let year = prompt('В каком году образовался ВАШ город');
let population = prompt('Сколько человек живут в вашем городе');

let num = 2024 - (`${year}`);

alert(`Городу ${name} исполнилось ${num} лет с момента его образования. Население - ${population} человек`);

let pi = 3.14;

let r = prompt('Какой радиус у круга');

let num = pi*(r*r);

alert(`Радиус ${r}. Площадь ${num}`);


let fr = prompt('Введите первое число');
let sec = prompt('Введите второе число');

let a = Number(fr);
let b = Number(sec);

let sum = a + b;
let mis = a - b;
let mnozh = a * b;
let del = a / b;

alert(`Сумма ${sum}, разность ${mis}, умножить ${mnozh}, деление ${del}`);