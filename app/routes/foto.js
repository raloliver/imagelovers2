var api = require('../api/foto'); //instância da api

//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    'use strict';
    let api = app.api.foto; //instância da api usando o consig (basta lembrar da estrutura de diretórios)
    
    //verbo get (o Express suporta todos os verbos)
    // a res do server é o 2º parâmetro da função (verbo) .get
    app.get('/v1/fotos', api.lista)   
}