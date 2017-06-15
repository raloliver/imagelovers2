var api = {};

api.lista = function (req, res) {
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
};

module.exports = api;