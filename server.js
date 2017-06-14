var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function () {
    console.log('Acesse: http://localhost:3000');
});

/** outros exemplo
http.createServer(function (req, res) {
    
    'use strict';
    let indexUrl = req.url.indexOf('=');
    let paramUrl = req.url.substr(indexUrl + 1);
    res.end(paramUrl);

    // com o Express, realizamos além de mtos cafés, a criação do server nodejs sem utilizar infinitas requisições para o servidor com inumeros ifs
}).listen(3000, function () {
    console.log('Pressione ctrl e clique no link: http://localhost:3000');
});
 */