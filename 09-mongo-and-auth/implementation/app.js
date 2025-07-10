const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const MongoStore = require('connect-mongo');
const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const config = require('config');

const mongo = config.get('mongo');
const mongoUrl = mongo.url;
const collectionSession = mongo.collectionSession;
const collectionTasks = mongo.collectionTasks;
const collectionUsers = mongo.collectionUsers;
const port = config.get('port');
const salt = config.get('salt');
console.log(collectionUsers);
console.log(port)
console.log(mongoUrl);

const client = new MongoClient(mongoUrl);
let tasksCollection;
let usersCollection;

async function dbConnection() {
    try {
        await client.connect();
        const db = client.db('site');
        tasksCollection = db.collection(collectionTasks);
        usersCollection = db.collection(collectionUsers);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

const formatString = str => str.toLowerCase().trim();

// Налаштування шаблонізатора
app.set('view engine', 'pug');
app.set('views', './views');
// статика
app.use(express.static(`${__dirname}/assets`));

// Для роботи з кукі
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    store: MongoStore.create({
        mongoUrl: mongoUrl,
        collectionName: collectionSession,
        ttl: 60 * 60,
    }),
    secret: "your-secret-key",
}));

app.use(morgan('tiny', {
    skip: (req) => req.url.startsWith('/.well-known'),
}))

app.use((req, res, next) => {
    app.locals.email = req.session?.email || null;
    app.locals.role = req.session?.role || null;
    next();
});

app.get('/', (req, res) => {
    console.log(req.session.email);
    res.render('main',)
});

app.get('/common', (req, res) => {
    res.render('common')
});


// Сторінка логіну
app.get('/login', (req, res) => {
    res.render('login');
});

// Обробка форми логіну
app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await usersCollection.findOne({"email": formatString(email)});
        if (!user || !(await bcrypt.compare(password, user.password))) return res.render('login', {error: 'login or password is incorrect'});
        req.session.email = user.email;
        req.session.role = user.role;
        return res.redirect('/dashboard');
    } catch (error) {
        console.error('Login error:', error);
        return res.render('login', {error: 'An error occurred during login'});
    }
});

// registration page
app.get('/register', (req, res) => {
    res.render('register');
});
// Обробка форми реєстрації
app.post('/register', async (req, res) => {
    try {
        const {email, password, role} = req.body;
        const userEmail = formatString(email);
        const formatRole = formatString(role);

        // Перевірка наявності користувача
        const existingUser = await usersCollection.findOne({"email": userEmail});
        if (existingUser) {
            return res.render('register', {error: 'user exists'});
        }
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = {
            email: userEmail,
            password: hashedPassword,
            role: formatRole,
        };
        await usersCollection.insertOne(newUser);
        res.render('login', {message: 'user created successfully, please login'});

    } catch (error) {
        console.error('Error during registration:', error);
        res.render('register', {error: 'An error occurred during registration'});
    }
});

// Захищена сторінка
app.get('/dashboard', async (req, res) => {
    const sessionUserEmail = req.session.email;
    if (!sessionUserEmail) return res.redirect('/login');
    try {
        const tasks = await tasksCollection.find({role: req.session.role}).toArray();
        res.render('dashboard', {tasks, user: sessionUserEmail});
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.render('dashboard', {error: 'An error occurred while fetching tasks'});
    }
});

// Вихід
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Запуск
dbConnection().then(() => {
    app.listen(port, () => {
        console.log('Сервер запущено на http://localhost:' + port);
    });
});

