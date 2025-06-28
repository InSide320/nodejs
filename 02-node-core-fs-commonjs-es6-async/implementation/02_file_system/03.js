// Task 03

// Створіть анонімний модуль у цьому файлі, який приймає назву файлу та повертає його розмір. Якщо файл не існує — повертає 0.

// Приклад аргумента 'test_folder/one.txt'

const fs = require('fs');

module.exports = (fileName = __dirname + "/test_folder/one.txt") => {
    console.log(fileName)
    if (fs.existsSync(fileName)) {
        const stats = fs.statSync(fileName);
        return stats.size;
    }
    return 0;
}
