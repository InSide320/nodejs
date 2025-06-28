// У цьому файлі ви підключаєте модулі для перевірки їхньої роботи.
// Після перевірки модуль можна закоментувати, щоб його вивід не заважав.

// Перше завдання реалізовано як приклад підключення та виконання.
// Після ознайомлення можна або видалити підключення, або закоментувати його.

// Завдання розміщені у відповідних файлах.


// Task 01
const task_01 = require('./task_01');
console.log(task_01);

// Task 02
const getMaxOfThree = require('./task_02');
console.log(getMaxOfThree(2, 9, -3));

// Task 03
const task_03 = require('./task_03');
console.log(task_03(["1", -2, 3, 0, -5, 6]));

console.log("\n")

// Task 04
const {prepareString} = require('./task_04');
console.log(prepareString("  hello world!  "));
// console.log(prepareString(123));

console.log("\n")

// Task 05
const randomSymbol = require('./task_05');
console.log(randomSymbol.randomSymbol("Hello, World!"));

console.log("\n")

// Task 06
const integerPart = require('./task_06');
console.log(integerPart.integerPart(4.9));
console.log(integerPart.integerPart(4.4));

console.log("\n")

// Task 07
const task_07 = require('./task_07');
console.log(task_07('abcd efjklsjdududdd'));
console.log(task_07('abcdefjklsjdududdd   '));
console.log(task_07(' foo '));
console.log(task_07(' f oo '));

console.log("\n")
// Task 08
const task_08 = require('./task_08');
console.log(task_08('hello'));
console.log(task_08('Hello'));
console.log(task_08(''));


