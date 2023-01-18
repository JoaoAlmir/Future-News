import "./PaginaHome.css"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { verNoticias } from "../../api/axios";


export function PaginaHome() {

    const [item, setItem] = useState([]);



    useEffect(() => {
        verNoticias().then(
            (response) => {
                setItem(response.data)
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, []);

    let lista = item.map((i, index) => (
    <div className="card-noticia" key={index} >
        <NavLink end to={"/noticia/"+i._id}><Card titulo={i.titulo} key={index} /></NavLink>
        <div className="luz-noticia" key={index} />
    </div>)
    )

    return (
        <div>
            <Header />


            <NavLink end to="/criarNoticia"> <div className="criar-ntc"> Criar Noticia</div> </NavLink>


            {lista}






        </div>
    )
}