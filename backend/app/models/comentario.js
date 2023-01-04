var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        texto: {
            type: String,
            required: true
        },
        id_noticia: {
            type: String,
            required: true
        },
        id_usuario: {
            type: String,
            required: true
        },
    });
    return mongoose.model('Comentario', schema);
}();
