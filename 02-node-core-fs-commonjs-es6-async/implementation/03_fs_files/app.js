// Task 01
const firstTask = require('./01');
console.log(firstTask());
console.log(firstTask(__dirname + '/test.file'));

// Task 02
const secondTask = require('./02');
secondTask().then((result) => console.log(result));

// Task 03
const thirdTask = require('./03');
thirdTask('This is the content of file_03.txt');

// Task 04
const fourthTask = require('./04');
fourthTask(['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']);

// fourthTask.createTxtFile("12312312312");
// fourthTask.createTxtFile(12312312312);
// .then(() => console.log('file_04.txt was created with the provided lines'))
// .catch(err => console.error('Error creating file_04.txt:', err));


// Task 05
const fifthTask = require('./05');
fifthTask(__dirname + '/test.files', __dirname + '/file_05.txt');