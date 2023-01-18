const controller = require("../controller/comentario");
const auth_controller = require("../controller/auth");

module.exports = function(app){
    //obter todos os comentarios
    app.get("/comentarios", controller.obterComentarios);

    //obter o comentario pelo id
    app.get("/comentarios/:id", controller.obterComentario);

    //obter o comentario pelo id
    app.get("/comentarios/post/:id", controller.obterComentarioDoPost);

    // checar se o token é valido
    //app.use("/comentarios", auth_controller.checar_token);

    //criar novo comentario
    app.post("/comentarios", controller.inserirComentario);

    //deletar comentario pelo id
    app.delete("/comentarios/:id", controller.removerComentario);
}

