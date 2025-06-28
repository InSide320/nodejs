// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає аргументи — вихідний файл і кінцевий файл.
// Модуль має зчитати вміст вихідного файлу (текст) та записати його у кінцевий файл.
// Кодування — UTF-8, для запису використовуйте прапорець w.
// Якщо вхідного файла немає, то виконання завершується (return;)

const fs = require('fs');
module.exports = (inputFile, outputFile) => {
    if (!fs.existsSync(inputFile)) {
        console.log(`The file ${inputFile} does not exist.`);
        return;
    }
    fs.copyFileSync(inputFile, outputFile, fs.constants.COPYFILE_FICLONE);
    console.log(`File ${inputFile} was copied to ${outputFile} successfully.`);
}
