const fs = require('fs/promises');

const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Data successfully written to ${filePath}`);
        return true;
    } catch (error) {
        console.error('Error writing to file:', error);
        throw error;
    }
}

module.exports = {writeFile};