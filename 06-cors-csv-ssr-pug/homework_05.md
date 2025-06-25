# HW 5. Реалізуємо “Сторінку відгуків”


## Task 01

Створіть Express-застосунок, підключіть та налаштуйте Pug як шаблонізатор.


## Task 02

Створіть папку views та файли:
```
main.pug
form.pug
guests.pug
```

## Task 03

Реалізуйте три маршрути:

```
GET    /         → відображає main.pug  
GET    /form     → відображає форму введення імені та повідомлення  
POST   /form     → приймає дані та зберігає їх у файлі message.json  
GET    /guests   → відображає список усіх повідомлень
```

## Task 04

У form.pug реалізуйте форму:

```
form(action="/form" method="POST")
input(type="text" name="username" placeholder="Ваше ім’я" required)
textarea(name="message" placeholder="Ваш відгук" required)
button(type="submit") Надіслати
```

## Task 05

У guests.pug виведіть усі відгуки:

```
h2 Відгуки гостей
ul
each guest in guests
li
strong= guest.username
| :
span= guest.message
```

## Task 06

Реалізуйте збереження даних у форматі JSON у файлі message.json у корені проєкту.

## Task 07

Додайте час створення повідомлення. Реалізуйте вивід часу.

*У цьому завданні не деталізовано кроки реалізації — залишено на ваш розсуд.