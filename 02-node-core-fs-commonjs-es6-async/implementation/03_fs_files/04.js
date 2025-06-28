// Task 04

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — масив рядків і записує їх у файл file_04.txt у поточній теці.
// Кожен елемент масиву потрібно записати з нового рядка, використовуючи переноси рядків \r\n. Кодування файлу — UTF-8, для запису використовуйте прапор w.

const fs = require('fs');
module.exports = (contentFile) => {
    fs.writeFile(
        __dirname + "/file_04.txt",
        Array.isArray(contentFile) ? contentFile.join('\r\n') : contentFile.toString(),
        {encoding: "utf-8", flag: "w"},
        (err) => {
            if (err) throw err;
            console.log('file_04.txt was created with the provided text');
        })
}

