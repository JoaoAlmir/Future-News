const Comentario = require("../models/comentario");

module.exports.obterComentarios = function (req, res) {
    let promise = Comentario.find().exec();
    promise.then(
        function (comentario) {
            res.status(200).json(comentario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.obterComentario = function (req, res) {
    let id = req.params.id

    let promise = Comentario.findById(id).exec();



    promise.then(
        function (comentario) {
            res.status(200).json(comentario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.inserirComentario = function (req, res) {

    let user = req.body;
   
    let promisse = Comentario.create(user);

    promisse.then(function (comentario) {
        res.status(201).json(comentario);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })


}

module.exports.removerComentario = function (req, res) {

    let id = req.params.id

    let promise = Comentario.findByIdAndDelete(id).exec();



    promise.then(
        function (comentario) {
            res.status(200).json(comentario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}