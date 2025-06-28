// Task 05

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття). 

setTimeout(() => {
    console.log(1);
}, 0);

Promise.resolve().then(() => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
    }, 0);
});

Promise.resolve().then(() => console.log(4));
// Output:
//2
//4
// 1
// 3
