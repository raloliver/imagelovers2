var api = {};
var fotos = [{
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

api.lista = function (req, res) {    
    
    //método json para renderizar em formato de dados do tipo json (like an API)
    res.json(fotos);
};

api.buscaId = function (req, res) {
    'use strict'
    //find funciona como um foreach
    let foto = fotos.find(function (foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
};

module.exports = api;