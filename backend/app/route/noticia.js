const controller = require("../controller/noticia");

module.exports = function(app){
    //obter todas as noticias
    app.get("/noticias", controller.obterNoticias);

    //obter a noticia pelo id
    app.get("/noticias/:id", controller.obterNoticia);

    //criar nova noticia
    app.post("/noticias", controller.inserirNoticia);

    //deletar noticia pelo id
    app.delete("/noticias/:id", controller.removerNoticia);
}

