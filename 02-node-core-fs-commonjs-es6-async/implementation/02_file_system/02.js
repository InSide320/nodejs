// Task 02

// Створіть анонімний модуль у цьому файлі, який приймає повний шлях до теки та повертає true або false залежно від того, чи існує вказана тека.

const path = require('fs');

module.exports = (folderPath = (__dirname + "/test_folder")) => {
    return path.existsSync(folderPath);
}
