import "./Header.css"
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";


export function Header() {
    


    const [titulo, setTitulo] = useState("> Future News");
    const auth = useContext(AuthContext);


    let login = document.getElementById("login")
    let cadastro = document.getElementById("cadastro")
    let conta = document.getElementById("conta")
    let sair = document.getElementById("sair")

// eslint-disable-next-line
    if(auth.token === undefined && login != undefined){
        login.classList.add("on")
        cadastro.classList.add("on")
        conta.classList.remove("on")
        sair.classList.remove("on")
    }
// eslint-disable-next-line
    else if(auth.token !== undefined && login != undefined){
        login.classList.remove("on")
        cadastro.classList.remove("on") 
        conta.classList.add("on")
        sair.classList.add("on")
    }

    function logout(){
        auth.setToken(undefined)
        auth.setNome(undefined)
        sair.classList.remove("active")
    }
    

    if (window.location.href !== "http://localhost:3000/login" && window.location.href !== "http://localhost:3000/cadastro")
        setTimeout(() => {
            if (titulo === "> Future News_")
                setTitulo("> Future News")
            else
                setTitulo("> Future News_")
        }, 1000)



    return (
        <>

            <div className="container-top">

                <NavLink id="login" className="login on" end to="/login">Login</NavLink>
                <NavLink id="cadastro"className="cadastro on" end to="/cadastro">Cadastro</NavLink>
                <div id="conta" className="conta">{auth.nome}</div>
                <div id="sair" onClick={logout} className="sair">Sair</div>


                <div className="titulo">
                    <NavLink className="texto-titulo" end to="/">{titulo}</NavLink>
                    <div className="luz-titulo"></div>
                </div>


            </div>
        </>
    )
}
