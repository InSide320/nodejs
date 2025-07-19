const config = require('config');

const PORT = config.get('port');
const app = require('../app');
const {connectDB} = require("../db/db");
const indexRouter = require('../routes/index');
const authRouter = require('../routes/auth');
const userRouter = require('../routes/dashboard');
const articlesRouter = require('../routes/articles');
const errorRoutes = require('../routes/errorRoutes');


connectDB().then(({usersCollection, articlesCollection}) => {
    app.use("/", indexRouter({articlesCollection}));
    app.use("/", authRouter({usersCollection}));
    app.use("/", userRouter({usersCollection}));
    app.use("/articles", articlesRouter({articlesCollection}));
    app.use(errorRoutes);


    app.listen(PORT, () => {
        console.log('Сервер запущено на http://localhost:' + PORT);
    });
});
