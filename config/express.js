var express = require('express');
var app = express(); //instância do express

//middleware static
app.use(express.static('./public'));

//verbo get (o Express suporta todos os verbos)
// a res do server é o 2º parâmetro da função (verbo) .get
app.get('/v1/fotos', function(req, res){
    'use strict';

    let fotos = [
        {
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

//Express: conjunto de filtros e middlewares que são aplicados em cada requisição.
module.exports = app;