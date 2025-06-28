// Task 07

// Проаналізуйте послідовність виконання коду NodeJS.

process.nextTick(() => {
  console.log(1);
});

Promise.resolve().then(() => {
  console.log(2);
});

console.log(3);

/*
Output:
* 3
* 1
* 2
* */