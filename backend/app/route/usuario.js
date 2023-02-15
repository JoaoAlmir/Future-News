const controller = require("../controller/usuario");
const auth_controller = require("../controller/auth");


module.exports = function(app){
    

    // checar se o token é valido
    //app.use("/usuarios", auth_controller.checar_token);

    //obter todos os usuarios
    app.get("/usuarios", controller.obterUsuarios);

    //obter usuario pelo id
    app.get("/usuarios/:id", controller.obterUsuario);

    //ver todos os comentarios do usuario do id
    app.get("/usuarios/:id/comentarios", controller.obterUsuarioComent);

    //criar novo usuario
    app.post("/usuarios",controller.inserirUsuario);
    
    //login para obter token
    app.post("/usuarios/login", auth_controller.login);

    //remover usuario por id
    app.delete("/usuarios/:id", controller.removerUsuario);
    
}
