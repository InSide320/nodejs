// Task 08

// Проаналізуйте послідовність виконання коду NodeJS.

setTimeout(() => {
  console.log(1);
}, 0);

setImmediate(() => {
  console.log(2);
});

console.log(3);

/*
Output:
* 3
* 1
* 2
* */