//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    //grupos (categorias) das fotos
    app.get('/v1/grupos', function (req, res) {
        'use strict';

        let grupos = [{
                _id: 1,
                nome: 'Pessoas'
            },
            {
                _id: 2,
                nome: 'Felinos'
            }
        ]
        // aqui ainda é possível usar o .send, mas com o .json ele envia um json vazio para a requisição via url
        res.json(grupos);
    });
}