const express = require("express");
const routes_usuario = require("../app/route/usuario");
const routes_comentario = require("../app/route/comentario");
const routes_noticia = require("../app/route/noticia");
const cors = require('cors');

module.exports = function(){
    let app = express(); 
    app.set("port", 9999);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_usuario(app);
    routes_comentario(app);
    routes_noticia(app);

    return app;
}

