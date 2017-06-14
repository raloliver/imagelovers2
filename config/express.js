var express = require('express');
var app = express(); //instância do express

//middleware static
app.use(express.static('./public'));

//Express: conjunto de filtros e middlewares que são aplicados em cada requisição.
module.exports = app;