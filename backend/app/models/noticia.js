var mongoose = require('mongoose');
module.exports = function(){
   var schema = mongoose.Schema({
       titulo: {
           type:String,
           required: true
       },
       conteudo: {
           type: String,
           required: true
       },
       data: {
        type: String,
        required: true
        },
        
   });
   return mongoose.model('Noticia', schema);
}();
