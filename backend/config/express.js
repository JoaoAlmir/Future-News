
const express = require("express");
const routes_usuario = require("../app/route/usuario");
const routes_comentario = require("../app/route/comentario");
const routes_noticia = require("../app/route/noticia");


module.exports = function(){
    let app = express(); 
    app.set("port", 9999);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_usuario(app);
    routes_comentario(app);
    routes_noticia(app);

    return app;
}

