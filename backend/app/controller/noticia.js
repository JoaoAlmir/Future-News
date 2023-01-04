const Noticia = require("../models/noticia");

module.exports.obterNoticias = function (req, res) {
    let promise = Noticia.find().exec();
    promise.then(
        function (noticia) {
            res.status(200).json(noticia);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.obterNoticia = function (req, res) {
    let id = req.params.id

    let promise = Noticia.findById(id).exec();



    promise.then(
        function (noticia) {
            res.status(200).json(noticia);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.inserirNoticia = function (req, res) {

    let date = Date.now()
    let hoje = new Date(date);
    hoje = hoje.toLocaleDateString();

    let ntc = {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        data:hoje
    }

    let promisse = Noticia.create(ntc);

    promisse.then(function (noticia) {
        res.status(201).json(noticia);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })


}

module.exports.removerNoticia = function (req, res) {

    let id = req.params.id

    let promise = Noticia.findByIdAndDelete(id).exec();



    promise.then(
        function (noticia) {
            res.status(200).json(noticia);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}