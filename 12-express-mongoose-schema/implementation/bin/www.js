const config = require('config');

const PORT = config.get('port');
const app = require('../app');
const {connectDB} = require("../db/db");
const indexRouter = require('../routes/index');
const authRouter = require('../routes/auth');
const articlesRouter = require('../routes/articles');
const dashboardRouter = require('../routes/dashboard');
const errorRoutes = require('../routes/errorRoutes');


(async () => {
    try {
        await connectDB();
        console.log('База даних підключена');

        app.use((req, res, next) => {
            console.log(`${req.method} ${req.url}`);
            next();
        });

        app.use("/", indexRouter());
        app.use("/auth", authRouter());
        app.use("/articles", articlesRouter());
        app.use("/dashboard", dashboardRouter());

        app.use(errorRoutes);

        app.listen(PORT, () => {
            console.log('Сервер запущено на http://localhost:' + PORT);
        });
    } catch (err) {
        console.error('Помилка під час запуску сервера:', err);
        process.exit(1);
    }
})();
