import "./PaginaHome.css"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"
import { NavLink } from "react-router-dom";


export function PaginaHome() {
    return (
        <div>
            <Header />

            
            <NavLink end to="/criarNoticia"> <div className="criar-ntc"> Criar Noticia</div> </NavLink>

            <div className="card-noticia">
                <NavLink end to="/noticia/aaaaa"><Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " /></NavLink>
                <div className="luz-noticia" />
            </div>


            <div className="card-noticia">
                <NavLink end to="/noticia/aaaaa"><Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " /></NavLink>
                <div className="luz-noticia" />
            </div>

            <div className="card-noticia">
                <NavLink end to="/noticia/aaaaa"><Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " /></NavLink>
                <div className="luz-noticia" />
            </div>

            <div className="card-noticia">
                <NavLink end to="/noticia/aaaaa"><Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " /></NavLink>
                <div className="luz-noticia" />
            </div>



        </div>
    )
}