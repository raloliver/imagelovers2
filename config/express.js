var express = require('express');
var app = express(); //instância do express

//middleware static
app.use(express.static('./public'));

//routes (o módulo importado aqui, recebe o parâmetro app)
require('../app/routes/foto')(app);
require('../app/routes/grupo')(app);

//Express: conjunto de filtros e middlewares que são aplicados em cada requisição.
module.exports = app;