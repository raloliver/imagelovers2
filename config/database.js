module.exports = function (uri) {
    var mongoose = require('mongoose');

    //o .connect() recebe como parâmetro uma URL de conexão. mongodb:// é padrão, em seguida vem o local do banco e logo depois o nome
    mongoose.connect('mongodb://' + uri);

    //vários eventos estão disponíveis no mongoose
    mongoose.connection.on('connected', function () {
        console.log('Conexão com o MongoDB iniciada com sucesso!');
    });

    //catch error
    mongoose.connection.on('error', function (error) {
        console.log('OPS! Não foi possível se conectar ao MongoDB: ' + error);
    });

    //close connection
    mongoose.connection.on('disconnected', function () {
        console.log('oXo!bye!au revior!tchau... MongoDB saiu da conversa.');
    });

    //e se a aplicação for finalizada? tipo um ctrl+c? pra isso e pra outras coisas que acontecem no SO, existe o process, e tbm trabalha com eventos (.on())
    process.on('SIGINT', function () {
        //aqui não foi a aplicação que parou e sim foi finalizada por alguém
        mongoose.connection.close(function () {
            console.log('Morreu... MongoDB foi removido do processo =(');
            //caso a conexão seja finalizada pela aplicação
            process.exit(0); //por padrão, o valor do parâmetro deve ser 0 pra indicar que tudo foi finalizado corretamente
        });
    });
};