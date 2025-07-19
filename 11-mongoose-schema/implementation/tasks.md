Створіть базу даних storage, коллекцію elements.
Розгляньте першу теку. Інсталюйте пакети (npm i). 

В файле documents знаходиться приклад документа який треба записати у базу даних. Запис виконується виконанням файлу index.js:

```js
node index.js
```

Ви повинні дописати в схему element.js структуру яка забезпечіть запис у базу з виконанням валідації. В кожний документ повинно додаватися поля createdAt, updatedAt.

## Task 01

Поля:
  - title. String, minLength : 10, maxLength 300
  - content. String
  - tags. Масив String
  - published. Boolean

## Task 02

Поля:
   - brand. String, від 2 до 20 символів
   - model. String
   - year. Число, від 1980 до 2026
   - color, String
   - price. Число, більше або дорівнює 0
   - vin. String, 17 символів, символи від 0 до 9 і латинській алфавіт крім I, O, Q. Регістр для літер - uppercase.


## Task 03

Поля:
  - firstName. String
  - lastName. String
  - birthDate. Рядок у форматі: "РРРР-MM-DD"
  - email. Email.
  - phone. Рядок починається з символу "+", далі ідуть 12 цифр

## Task 04

Поля:
  - name. String
  - color. String
  - heightCm. Число, від 0 до 100
  - powerW. Число від 0 до 100
  - bulbType. Рядок з масиву: ['E27', 'E14', 'G4', 'G9']
  - dimmable. Boolean

## Task 05

Поля:
  - title. Рядок
  - author. Рядок. Обов'язково містить пробіл.
  - year. Число. Від 1700 до 2026