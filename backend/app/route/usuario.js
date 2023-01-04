const controller = require("../controller/usuario");

module.exports = function(app){
    //obter todos os usuarios
    app.get("/usuarios", controller.obterUsuarios);

    //obter usuario pelo id
    app.get("/usuarios/:id", controller.obterUsuario);

    //ver todos os comentarios do usuario do id
    app.get("/usuarios/:id/comentarios", controller.obterUsuarioComent);

    //criar novo usuario
    app.post("/usuarios",controller.inserirUsuario);

    //remover usuario por id
    app.delete("/usuarios/:id", controller.removerUsuario);

    
}
