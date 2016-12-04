'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
        , name: 'Be Mean'
        , returned_at: date
    }
    , ERROR = {
        message: 'erro 404 - file not found/ erro 404 - arquivo não encontrado'
    }
    , POKEMONCREATE = {
        MESSAGE:" criando pokemon yaay \o/ "
    }
    , POKEMONDELETE = {
        MESSAGE: " deletando pokemon saad ;( "
    }
    , POKEMONUPDATE = {
        MESSAGE: " evoluindo pokemon yeah /o/ "
    }
    , POKEMONREAD = {
        MESSAGE: " vendo pokemon hehe :) "
    }
    ;

http.createServer(function (request, response) {
    if (request.url === '/api/v1') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(SUCCESS));
    } else if (request.url === '/api/pokemons/create') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('<p>' + JSON.stringify(POKEMONCREATE.MESSAGE).replace('" ', '').replace(' "', '') + '</p>')
    } else if (request.url === '/api/pokemons/delete') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<p>' + JSON.stringify(POKEMONDELETE.MESSAGE).replace('" ', '').replace(' "', '') + '</p>')
    } else if (request.url === '/api/pokemons/update') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<p>' + JSON.stringify(POKEMONUPDATE.MESSAGE).replace('" ', '').replace(' "', '') + '</p>')
    } else if (request.url === '/api/pokemons/read') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<p>' + JSON.stringify(POKEMONREAD.MESSAGE).replace('" ', '').replace(' "', '') + '</p>')
    } else {
        response.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
        response.write(JSON.stringify(ERROR));
    }
    response.end();
}).listen(3000, function () {
    console.log('servidor rodando em localhost:3000');
});

