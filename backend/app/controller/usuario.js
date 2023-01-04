const Usuario = require("../models/usuario");
const Comentario = require("../models/comentario");

const bcrypt = require("bcrypt");





module.exports.obterUsuarios = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function (usuario) {
            res.status(200).json(usuario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.obterUsuario = function (req, res) {
    let id = req.params.id

    let promise = Usuario.findById(id).exec();



    promise.then(
        function (usuario) {
            res.status(200).json(usuario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.obterUsuarioComent = function (req, res) {
    let id = req.params.id

    let promise = Comentario.findById(id).exec();

    promise.then(
        function (coment) {
            res.status(200).json(coment);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.inserirUsuario = function (req, res) {

    let user = req.body;
    user = {
        nome: user.nome,
        email: user.email,
        funcao: user.funcao,
        senha: bcrypt.hashSync(user.senha, 10),
    }
    let promisse = Usuario.create(user);

    promisse.then(function (usuario) {
        res.status(201).json(usuario);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })


}

module.exports.removerUsuario = function (req, res) {

    let id = req.params.id

    let promise = Usuario.findByIdAndDelete(id).exec();



    promise.then(
        function (usuario) {
            res.status(200).json(usuario);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}




