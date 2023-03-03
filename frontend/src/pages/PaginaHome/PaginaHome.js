import "./PaginaHome.css"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { verNoticias } from "../../api/axios";
import { AuthContext } from "../../App";




export function PaginaHome() {

    const [item, setItem] = useState([]);
    const auth = useContext(AuthContext);
    

    function botaoCriarNtc(func) {
        if (func == 1) {
            return (<NavLink end to="/criarNoticia"> <div className="criar-ntc on"> Criar Noticia</div> </NavLink>)
        }
        else
            return (<NavLink end to="/criarNoticia"> <div className="criar-ntc"> Criar Noticia</div> </NavLink>)

    }



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
            <NavLink end to={"/noticia/" + i._id}><Card titulo={i.titulo} key={index} /></NavLink>
            <div className="luz-noticia" key={index} />
        </div>)
    )

    return (
        <div>
            <Header />

            {botaoCriarNtc(auth.funcao)}

            {lista}

        </div>
    )
}