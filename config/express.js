var express = require('express');
var app = express(); //instância do express
var consign = require('consign'); //instância do consign: módulo para importar as rotas automaticamente
var bodyParser = require('body-parser'); //middleware necessário para popular os dados (req.body)

//middleware static
app.use(express.static('./public'));

//middleware p/ popular os dados (req.body) que devem ser iniciado antes das rotas
app.use(bodyParser.json());

//aqui usamos o consign para esquercermos as rotas. usamos o .into para informar que as rotas recebem uma instância do express
//rota depende de api e api não depende de ninguém
//usando .then, realizo a inclusão de outras pastas no consign
//usando o cwd (current working directory) você declara o diretório atual de trabalho e com isso, a instância da api nas rotas fica menos verbosa
consign({
        cwd: 'app'
    })
    .include('api')
    .then('routes')
    .into(app);

//Express: conjunto de filtros e middlewares que são aplicados em cada requisição.
module.exports = app;