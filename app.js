'use strict';
/*
var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<h1>Be Mean</h1>");
    
    response.end();
});

server.listen(3000, function () {
    console.log('Executando Servidor HTTP');
});*/

var http = require('http')
, fs = require('fs')
, index = fs.readFileSync('index.html');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(index);
}).listen(3000, function () {
    console.log('servidor rodando em localhost:3000');
});