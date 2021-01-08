const http = require('http');
const dbimp=require('./dataimp')
const db=require('./dbconnect')
const express=require('express')
const app=express()
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080); 