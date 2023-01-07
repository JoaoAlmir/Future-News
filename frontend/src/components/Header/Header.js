import "./Header.css"
import { useState } from "react"


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

            <div className="login active">login</div>
            <div className="cadastro active">cadastro</div>
            <div className="conta">User</div>
            <div className="sair">sair</div>


            <div className="container-top">

                <div className="titulo">
                    <div className="texto-titulo">{titulo}</div>
                    <div className="luz-titulo"></div>
                </div>

            </div>
        </>
    )
}
