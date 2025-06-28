const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer(serverFunction);

function serverFunction(req, res) {
    const data = `Date request: ${Date.now()} - Method Request: ${req.method} - Request URL: ${req.url}\n`;
    if (req.method === 'GET' && req.url === "/") {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Home Page!');
    } else if (req.method === 'GET' && req.url === "/about") {
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page!');
    } else if (req.method === 'POST' && req.url === "/echo") {
        res.end(Date.now().toString());
    } else if (req.method === 'GET' && req.url === "/htmlfile") {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(__dirname, "public", './file.html'), 'utf8', (err, data) => {
            res.end(data);
        })
    } else if (req.method === 'GET' && req.url === "/image") {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile(path.join(__dirname, "public", './image.png'), (err, data) => {
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
    fs.writeFile(path.join(__dirname, "public", 'log.data'), data, {flag: 'a'}, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    })
}


server.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});