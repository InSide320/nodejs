// Task 02

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — назву файлу. Модуль зчитує вміст файлу та повертає суму чисел, що в ньому містяться.

// Приклад аргумента: 'num.dat'
// Приклад поверненного результата: 25

const fs = require('fs');

module.exports = async (fileName) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(fileName)) {
            resolve(0);
            return;
        }
        fs.readFile(fileName, {encoding: 'utf8', flag: "r"}, (err, data) => {
            const arr = data.split("\n").map(Number);
            resolve(arr.reduce((a, b) => a + b, 0));
        });
    });
}

