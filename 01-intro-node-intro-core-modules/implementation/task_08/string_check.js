module.exports = (str) => {
    if (str.length === 0) {
        return true;
    }

    return /^[a-z]*$/.test(str);
}