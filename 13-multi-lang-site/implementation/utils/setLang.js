config = require('config');

module.exports = function (req, res, next) {

    const segments = req.path.split('/').filter(Boolean);
    const [lang, ...rest] = segments;

    if (!lang) return res.redirect(`/${config.defaultLocale}`);

    if (!config.supportedLangs.includes(lang)) {
        return res.status(404).render('404', { url: req.originalUrl });
    }

    res.setLocale(lang);
    res.locals.lang = lang;
    res.locals.clearPath = '/' + rest.join('/');
    res.locals.langs = config.supportedLangs;

    next();
} 