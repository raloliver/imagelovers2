var api = require('../api/grupo'); //instância da api

//aqui criamos um módulo que recebe um parâmetro
module.exports = function (app) {
    //grupos (categorias) das fotos
    app.get('/v1/grupos', api.lista);
}