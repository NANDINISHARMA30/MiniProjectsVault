// // for exporting to other files
// const c = require('./first.js'); // importing first.js file
// const avg=c(12,22,11);

// // creating custom modules
//  avg = (a, b) => {
//     console.log('The average of ' + a + ' and ' + b + ' is:');
//     return (a + b) / 2;
// };

// Module.exports = avg;

// we can also make objects and export them

//FILE OPERATIONS 
// read file -> asynchronous
//  const fs = require('fs'); 
// fs.readFile('first.js', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// }); // asynchronous read will return all values
// console.log('This is after reading the file'); // this will execute before the file read completes



// writefile 
// let op = 'This is the output file content'; or we can write directly in the file
// fs.writeFile('output.txt', 'This is the output file content', (err) => { // in this new file bni with content
//     if (err) {
//         console.error(err);
//     }else{
//         console.log('File written successfully');
//         }
//     }); // this will write the content to the file, if file does not exist it will create a new file    

// append file -> to add content in file
//  fs.appendFile('output.txt', 'This is the appended content', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File appended successfully');
//     }
// });

// //delete file
//  fs.unlink('output.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File deleted successfully');
//     }
// });