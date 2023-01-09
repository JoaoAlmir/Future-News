import "./PaginaHome.css"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"


export function PaginaHome() {
    return (
        <div>
            
            <Header />
            <div className="card-noticia">
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>


            <div className="card-noticia">
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>

            <div className="card-noticia">
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>

            <div className="card-noticia">
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>



        </div>
    )
}