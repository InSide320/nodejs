const config = require('config');

const PORT = config.get('port');
const app = require('../app');
const {connectDB} = require("../db/db");
const indexRouter = require('../routes/index');
const authRouter = require('../routes/auth');
const userRouter = require('../routes/dashboard');
const articlesRouter = require('../routes/articles');
const dashboardRouter = require('../routes/dashboard');
const commentRouter = require('../routes/commentRouter');
const errorRoutes = require('../routes/errorRoutes');
const articleSchema = require('../models/articleSchema');
const userSchema = require('../models/userSchema');


(async () => {
    try {
        await connectDB();
        console.log('База даних підключена');

        app.use((req, res, next) => {
            console.log(`${req.method} ${req.url}`);
            next();
        });

        app.use("/", indexRouter({articleSchema}));
        app.use("/articles", articlesRouter({articleSchema}));
        app.use("/", commentRouter({articleSchema}));
        app.use("/", authRouter({userSchema}));
        app.use("/", userRouter({userSchema}));
        app.use("/dashboard", dashboardRouter({userSchema}));

        app.use(errorRoutes);

        app.listen(PORT, () => {
            console.log('Сервер запущено на http://localhost:' + PORT);
        });
    } catch (err) {
        console.error('Помилка під час запуску сервера:', err);
        process.exit(1);
    }
})();
