//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    //verbo get (o Express suporta todos os verbos)
    // a res do server é o 2º parâmetro da função (verbo) .get
    app.get('/v1/fotos', function (req, res) {
        'use strict';

        let fotos = [{
                _id: 1,
                titulo: 'Seu Animal',
                url: 'https://i.ytimg.com/vi/inpRW4I0Lpc/maxresdefault.jpg'
            },
            {
                _id: 2,
                titulo: 'Liger',
                url: 'https://i.ytimg.com/vi/DM9cV1fF518/maxresdefault.jpg'
            }
        ]
        //método json para renderizar em formato de dados do tipo json (like an API)
        res.json(fotos);
    });    
}