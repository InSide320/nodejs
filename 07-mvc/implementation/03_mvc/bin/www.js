const config = require('config');

const PORT = config.get('port');
const app = require('../app');
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));