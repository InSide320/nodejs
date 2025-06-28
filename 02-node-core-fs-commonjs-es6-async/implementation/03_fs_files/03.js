// Task 03

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — рядок тексту.
// Модуль має створити файл з ім’ям file_03.txt у поточній теці. У файл потрібно записати переданий текст у кодуванні UTF-8.
// Для запису використовуйте файловий прапор w.

const fs = require('fs');
module.exports = (text) => {
    fs.writeFile(__dirname + "/file_03.txt", text, {encoding: "utf-8", flag: "w"}, (err) => {
        console.log('file_03.txt was created with the provided text');
    })
}
