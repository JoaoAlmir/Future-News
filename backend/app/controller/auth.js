const jwt = require("jsonwebtoken");


//para arrumar
module.exports.login = function (req, res) {
    let info_login = req.body;
    let promise = Aluno.findOne({ matricula: info_login.matricula });
    promise.then(
        function (aluno) {
            if (bcrypt.compareSync(info_login.senha, aluno.senha)) {
                let token = jwt.sign({id:aluno.id},"senhasecreta")
                res.status(200).json({toke:token, nome:aluno.nome});
            }
            else {
                res.status(401).send("login falhou");

            }
        }
    ).catch(
        function (error) {
            res.status(401).send("login falhou");
        }
    )

}


module.exports.checar_token = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, 'senhasecreta', function(err, decoded){
        if(err){
            return res.status(401).send("Token inválido!");
        }else{
            next();
        }
    })      
}

