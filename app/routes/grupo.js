var api = require('../api/grupo'); //instância da api

//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    'use strict';
    let api = app.api.grupo; //instância da api usando o consig (basta lembrar da estrutura de diretórios)

    //grupos (categorias) das fotos
    app.get('/v1/grupos', api.lista);
}