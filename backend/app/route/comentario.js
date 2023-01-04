const controller = require("../controller/comentario");

module.exports = function(app){
    //obter todos os comentarios
    app.get("/comentarios", controller.obterComentarios);

    //obter o comentario pelo id
    app.get("/comentarios/:id", controller.obterComentario);

    //criar novo comentario
    app.post("/comentarios", controller.inserirComentario);

    //deletar comentario pelo id
    app.delete("/comentarios/:id", controller.removerComentario);
}

