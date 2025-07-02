const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');

const bodyParser = require('body-parser');
const app = express();

// Налаштування шаблонізатора
app.set('view engine', 'pug');
app.set('views', './views');
// статика
app.use(express.static(`${__dirname}/assets`));

// Для роботи з кукі
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new FileStore({
    path: './sessions',      // Тека де зберігаються сесії
    ttl: 3600,               // Час життя сесії у секундах (1 час)
    retries: 1,              // Спроб запису файлу
  }),
  secret: 'your_secret_key_39393', // Ваш секрет для кукі
  resave: false, // не зберігати якщо не змінювалась
  saveUninitialized: false, // не зберігати в теку якщо не добавляли дані
  cookie: {
    maxAge: 3600000          // Час життя кукі у мс (1 час)
  },
}));

app.use(morgan('tiny', {
    skip: (req) => req.url.startsWith('/.well-known'),
  }))



app.use((req, res, next) => {
  app.locals.username = req.session?.user || null;
  next();
});

app.get('/', (req, res)=>{
  console.log(req.session.user);
  res.render('main',)
});

app.get('/common', (req, res)=>{
  res.render('common')
});


// Сторінка логіну
app.get('/login', (req, res) => {
  res.render('login');
});

// Обробка форми логіну
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Простий хардкод (можна замінити на базу)
  if ((username === 'admin' && password === '123') ||
  (username === 'alex' && password === '777')
  ) {
    req.session.user = username;
    return res.redirect('/dashboard');
  }

  res.render('login', { error: 'Невірний логін або пароль' });
});

// Захищена сторінка
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('dashboard', { user: req.session.user });
});

// Вихід
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Запуск
app.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000');
});
