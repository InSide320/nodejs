const {writeFile, readFile} = require('../utils/index.js');
const path = require('path');

const filePath = path.join(__dirname, "../uploads", 'data.json');

module.exports = {
    "add": async (username, text) => {
        const newMessages = {
            username,
            text,
            date: new Date().toISOString()
        };
        const messages = await readFile(filePath);
        messages.push(newMessages);
        await writeFile(filePath, messages);
        return newMessages;
    },
    "getAll": () => {
            return readFile(filePath);
    }
}