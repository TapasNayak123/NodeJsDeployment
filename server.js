const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Hii I am new born !!! </h1>')
})

app.get('/myData', (req, res) =>{
    res.send('<h1>This is testing !!! </h1>')
})

app.listen(3000);

// const { request } = require('express');
// const http = require('http');

// http.createServer((request, res) =>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

//   // Log the request URL (optional)
//   console.log(`Request received for: ${request.url}`);

//   // Send the response
//   res.end('Hello, world! This is your Node.js server.\n');
// }).listen(4000);