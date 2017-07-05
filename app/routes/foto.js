var api = require('../api/foto'); //instância da api

//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    'use strict';
    let api = app.api.foto; //instância da api usando o consig (basta lembrar da estrutura de diretórios)

    
    //verbo get (o Express suporta todos os verbos)
    // a res do server é o 2º parâmetro da função (verbo) .get
    app.route('/v1/fotos')
       .get(api.lista)
       .post(api.adiciona);

    /*
    app.get('/v1/fotos/:id', function (req, res) {
        console.log('Req p/ foto ' + req.params.id)
    })
    */

    //é possível definir uma rota padrão usando .route()
    app.route('/v1/fotos/:id')
       .get(api.buscaId)
       .delete(api.removeId)       
       .put(api.atualiza);
}