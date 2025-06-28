const firstTask = require("./01.js");

// Task 01
console.log("01.js:\n" + firstTask(__dirname + "/test_folder"));
console.log("01.js:\n" + firstTask(""));
console.log("\n");
// Task 02
const secondTask = require("./02.js");
console.log(secondTask((__dirname + "/test_folder")));
console.log("\n");
// Task 03
const thirdTask = require("./03.js");
console.log(thirdTask("test_folder/one.txt"));
console.log(thirdTask(__dirname + "/test_folder/one.txt"));
console.log("\n");
// Task 04
const fourthTask = require("./04.js");
console.log(fourthTask(__dirname + "/test_folder"));
console.log("\n");
// Task 05
const fifthTask = require("./05.js");
console.log(fifthTask());
console.log(fifthTask(""));
console.log(fifthTask(__dirname + "/test_folder"));