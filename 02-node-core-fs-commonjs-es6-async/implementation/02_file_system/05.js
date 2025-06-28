// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає назву теки та повертає кількість файлів у ній (теки не враховуємо).

// Приклад аргумента 'test_folder'

const fs = require('fs');

module.exports = (folderName) => {
    if (!fs.existsSync(folderName)) {
        return 0;
    }
    let fileCount = 0;

    fs.readdirSync(folderName).forEach((file) => {
        const filePath = `${folderName}/${file}`;
        if (fs.statSync(filePath).isFile()) {
            fileCount++;
        }
    })

    return fileCount;
}
