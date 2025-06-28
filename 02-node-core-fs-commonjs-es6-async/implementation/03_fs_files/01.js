// Task 01

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — назву файлу. Модуль повертає вміст цього файлу.

// Приклад аргумента: 'test.file'

const fs = require('fs');
module.exports = (fileName) => {
    if (!fs.existsSync(fileName)) {
        return "";
    }
    return fs.readFileSync(fileName).toString();
}
