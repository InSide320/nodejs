// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.
// Використовуйте синтаксис CommonJS.

exports.randomSymbol = function getRandomSymbol(str) {
    if (str.length === 0) {
        return '';
    }

    const randomNumber = Math.random();
    console.log(randomNumber, str.length, randomNumber * str.length);

    return str[Math.floor(randomNumber * str.length)];
}
