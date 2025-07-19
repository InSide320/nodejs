const fs = require('fs/promises');

const readFile = async (filePath) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileData || '[]');
    } catch (error) {
        if (error.code === 'ENOENT') return [];
        console.error('Error reading or parsing file:', error);
        throw error;
    }
}

module.exports = {readFile};
