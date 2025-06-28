// Task 03

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття). 

console.log(1);

setTimeout(() => {
    console.log(2);
    new Promise(resolve => {
        console.log(3);
        resolve();
    })
        .then(() => console.log(4));
}, 0);

new Promise(resolve => {
    console.log(5);
    resolve();
}).then(() => console.log(6));

console.log(7);

// Output:
//1
//5
//7
//6
//2
//3
//4
