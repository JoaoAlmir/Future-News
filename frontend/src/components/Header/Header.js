import "./Header.css"
import { useState } from "react"
import { NavLink } from "react-router-dom";


export function Header() {

    const [titulo, setTitulo] = useState("> Future News_");

    setTimeout(() => {
        if (titulo === "> Future News_")
            setTitulo("> Future News")
        else
            setTitulo("> Future News_")
    }, 1000)



    return (
        <>




            <div className="container-top">

                <NavLink className="login on" end to="/login">Login</NavLink>
                <NavLink className="cadastro on" end to="/cadastro">Cadastro</NavLink>
                <div className="conta">User</div>
                <div className="sair">sair</div>

                
                <div className="titulo">
                    <NavLink className="texto-titulo" end to="/">{titulo}</NavLink>
                    <div className="luz-titulo"></div>
                </div>


            </div>
        </>
    )
}
