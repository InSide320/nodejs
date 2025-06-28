// Task 04

// Створіть анонімний модуль, який приймає назву теки та повертає її вміст у форматі масиву з об'єктами. Приклад масиву наведено нижче. Якщо теки не існує — повертає false. Якщо тека порожня — повертає порожній масив.

// Приклад об'єкту
// [
//     {name : "one", ext : "txt"},
//     {name : "doc", ext  : "dat"}
// ]

// Приклад аргумента 'test_folder'

const fs = require('fs');
const path = require("path");

module.exports = (folderName) => {

    if (!fs.existsSync(folderName)) {
        return false;
    }

    const files = fs.readdirSync(folderName);
    if (files.length === 0) {
        return [];
    }

    return files.map(file => {
        const ext = path.extname(file).slice(1);
        const name = path.basename(file).replace(`.${ext}`, '');
        return {name: name, ext: ext};
    })
}