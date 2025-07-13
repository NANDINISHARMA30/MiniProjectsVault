// console.log('This is the first node js Program');
// let a = 10;
// let b = 20;
// console.log('Sum of a and b is: ' + (a + b));


// HTTP
// const http = require('http');
// const server = http.createServer((req,resp) => {
//     // req = request
//     // resp = response 
//     resp.writeHead(200, {'Content-Type': 'text/html'});
//     resp.write('<h1>My first Node js from Server</h1>');
//     resp.write('<button>ok</button>');
//     resp.end();  
// });
// server.listen(9898);


// // URL MODULE
// const http = require('http'); // will make server
// const url = require('url');   // will send data through url
// http.createServer((req, resp) => {
//     console.log(req.url); // will print the url in console
//     const q = url.parse(req.url); // will parse the url and get the query string
//     // const txt = q.year + " " + q.month; // will get the year and month from the query string
//     // resp.writeHead(200, {'Content-Type': 'text/html'});
//     // resp.write(txt);
//     // resp.end();
//     console.log(q); // will print the query string in console
// }).listen(8083);