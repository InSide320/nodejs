// Task 03

// Створіть анонімний модуль, який реалізує функцію, що отримує масив чисел та повертає кількість елементів, які є більшими або дорівнюють нулю.
// Використовуйте синтаксис CommonJS.

module.exports = function countNonNegativeNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an array');
    }
    return arr.filter(num => typeof num === 'number' && num >= 0).length;
}
