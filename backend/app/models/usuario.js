var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        
        // "1" = administrador "2" = usuario comum 
        funcao: {
            type: Number,
            required: true
        },

    });
    return mongoose.model('Usuario', schema);
}();
