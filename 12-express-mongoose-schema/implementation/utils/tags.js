const parseTags = (str) => {
    if (typeof str !== 'string') return [];
    return str.split(',').map(tag => tag.trim()).filter(Boolean);
}

function stringifyTags(tagsArray = []) {
    return Array.isArray(tagsArray) ? tagsArray.join(', ') : '';
}

module.exports = {
    parseTags,
    stringifyTags
}
