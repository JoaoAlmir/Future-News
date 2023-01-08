import "./PaginaHome.css"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"
import { CustomMouse } from "../../components/CustomMouse/CustomMouse"


export function PaginaHome() {
    return (
        <div>
            <CustomMouse/>
            <Header />
            <div>
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>


            <div>
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>

            <div>
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>

            <div>
                <Card titulo="CES 2023: HTC apresenta novo headset de VR; dispositivo compete com Meta Quest " />
                <div className="luz-noticia" />
            </div>



        </div>
    )
}