// Task 10

// Створіть анонімний модуль, який приймає масив (array) як аргумент і повертає новий масив зі значеннями у зворотному порядку.
// Експорт реалізуйте через export default (синтаксис ES6).

// Приклад
// [1, 2, 3] => [3, 2, 1]
// [1, 2, 3, 4] => [4, 3, 2, 1]
// [1] => [1]

export default (array) => {
    return array.reverse();
}
