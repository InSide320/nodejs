// Task 04

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття). 

console.log(1);

Promise.resolve().then(() => {
    console.log(2);
    Promise.resolve().then(() => console.log(3));
});

console.log(4);

// Output:
// 1
// 4
// 2
// 3
