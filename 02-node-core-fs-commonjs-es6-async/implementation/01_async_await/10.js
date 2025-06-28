// Task 10

// Проаналізуйте послідовність виконання коду NodeJS.

// const arr = [11, 22];
//
// const fn = (item) => setTimeout(item => console.log(item),0, item);
//
// arr.filter(fn);
/*
Output:
* 11
* 22
* */

// Розгляньте цей варіант коду

// const arr = [11, 22];
// const fn = (item) => setTimeout(item => console.log(item));
// arr.filter(fn);


/*
Через те що не передано жодного аргументу
* undefined
* undefined
*
* */