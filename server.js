var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/imagelovers2'); // como não retornamos nada, não é necessário declarar, em seguida indicamos o endereço do banco

http.createServer(app).listen(3000, function () {
    console.log('Acesse: http://localhost:3000');
});