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

api.removeId = function (req, res) {
    'use strict'
    //o filter (ES5) é utilizado para filtrar o item que será deletado
    //reatribuímos a variável "fotos" ao novo item do array, devolvendo um novo objeto (mesmo dando refresh na página)
    fotos = fotos.filter(function (foto) {
        return foto._id != req.params.id;
    })

    //o status 204: tudo ok mas ñ devolve nenhuma informação
    //res.status(204).end();
    res.sendStatus(204);
}

module.exports = api;