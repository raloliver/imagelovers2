var express = require('express');
var app = express(); //instância do express
var consign = require('consign'); //instância do consign: módulo para importar as rotas automaticamente

//middleware static
app.use(express.static('./public'));

//aqui usamos o consign para esquercermos as rotas. usamos o .into para informar que as rotas recebem uma instância do express
consign().include('app/routes').into(app);

/**
//routes (o módulo importado aqui, recebe o parâmetro app)
require('../app/routes/foto')(app);
require('../app/routes/grupo')(app);
 */

//Express: conjunto de filtros e middlewares que são aplicados em cada requisição.
module.exports = app;