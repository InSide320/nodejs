const express = require('express');
const Page = require('../db/pageSchema');
const router = express.Router();

// read
router.get('/', async (req, res) => {
    const page = await Page.findById("68847a29e9b0e94c80ac8acf");
    res.render('page', {page});
});


module.exports = router;
