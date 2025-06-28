const express = require('express');
const http = require('http');
const config = require('config');
const port = config.get('port');
const app = express();
// require('dotenv').config();
// const port = process.env.PORT;

http.createServer(app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("home");
})

app.get("/json", (req, res) => {
    res.json({
        "title": "express",
        "success": 1
    })
})

app.get("/redirect", (req, res) => {
    res.redirect(301, "/json");
})

app.get("/goods/:id/", (req, res) => {
    const urlParts = req.originalUrl.split('/');
    const resource = urlParts[1];

    res.json({
        "url": resource,
        "id": req.params.id,
    });
})

app.get("/q", (req, res) => {
    const query = req.query;
    console.log(query);
    res.json({
        ...query
    });
})

app.get("/random", (req, res) => {
    const query = req.query;
    const min = parseInt(query.min);
    const max = parseInt(query.max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({
        ...query,
        "random": randomNumber
    });
})

app.use((req, res) => {
        res.status(400).send('not found');
    }
)