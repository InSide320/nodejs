// Task 09

// Проаналізуйте послідовність виконання коду NodeJS.

console.log(1);

setTimeout(() => console.log(2), 0);

setImmediate(() => console.log(3));

Promise.resolve().then(() => console.log(4));

process.nextTick(() => console.log(5));

console.log(6);

/*
Output:
* 1
* 6
* 5
* 4
* 2
* 3
* */