var api = {};
var countId = 3;
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
};

api.adiciona = function (req, res) {
    'use strict'
    //gambiarra inicial pra geral o Id
    let foto = req.body;
    foto._id = countId++;

    fotos.push(foto);
    //por padrão o método .body precisa de um middleware para popular os dados
    console.info('Foto com ID ' + foto._id + ' cadastrada com sucesso!');

    //devemos dar uma resposta pra o servidor, já que fizemos uma requisão
    res.json(foto);
};

api.atualiza = function (req, res) {
    'use strict'

    let foto = req.body;
    let fotoId = req.params.id;

    //.findIndex() método do ES2015, o ID da foto é igual ao valor da propriedade que está sendo varrida?
    let indice = fotos.findIndex(function (foto) {
        return foto._id == fotoId;
    })
    
    //passando os dados do req.body para a lista de itens (fotos)
    fotos[indice] = foto;

    //tudo ok (status 200). PRECISAMOS DAR SEMPRE UMA RESPOSTA AO SERVIDOR.
    res.sendStatus(200);
}

module.exports = api;