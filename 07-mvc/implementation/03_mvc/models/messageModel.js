const message = [];

module.exports = {
    "add" : (username, text) => {
        message.push({username, text});
    },
    "getAll" : message
}