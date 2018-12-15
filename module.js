//Instanciando el modulo Os, que ya viene con NodeJs
/*
const http = require('http');

const colors = require('colors');

const handleServer = function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(`<h1>Hola mundo</h1>`);
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000,function()
{
    console.log('Server on port 3000'.red);
});

*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/',function(req,res){
    res.send('<h1>Hola mundo con Express y Node</h1>');
    res.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
} );