const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const pathname = req.url;
  if(pathname == '/about') 
    {
  console.log("about page");
    }
    else if(pathname == "/") {
        console.log("home page");
        res.writeHead(200, {'Content-Type': 'text/html'});
        const content1 = fs.readFileSync('./views/home.html');
        res.write(content1);
        res.end();


    } else if(pathname == "/services") {
        console.log("services page");


    }
}).listen(8088)