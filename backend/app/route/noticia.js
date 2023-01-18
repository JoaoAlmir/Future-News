const controller = require("../controller/noticia");
const auth_controller = require("../controller/auth");

module.exports = function(app){
    //obter todas as noticias
    app.get("/noticias", controller.obterNoticias);

    //obter a noticia pelo id
    app.get("/noticias/:id", controller.obterNoticia);

    // checar se o token é valido
    //app.use("/noticias", auth_controller.checar_token);

    //criar nova noticia
    app.post("/noticias", controller.inserirNoticia);

    //deletar noticia pelo id
    app.delete("/noticias/:id", controller.removerNoticia);
}

