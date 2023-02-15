import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { enviarComentario, verComentariosPost, verNoticia} from "../../api/axios";
import { Comentario } from "../../components/Comentario/Comentario";
import { Header } from "../../components/Header/Header";
import "./PaginaNoticia.css"



function Coment(id) {

    const [comentario, setComentario] = useState([]);
    
    

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(id);
        enviarComentario(data.texto,id,"usuario").then((response) => {
        }).catch((error) => console.log(error))
        window.location.reload(false);
    };

    //ver comentarios do post
    useEffect(() => {
        verComentariosPost(id).then(
            (response) => {
                setComentario(response.data)
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, [id]);

    let listaTemp = comentario.map((i, index) => (
        <Comentario nome={i.id_usuario} coment={i.texto} key={index} ></Comentario>
    ))
    
    const [listaComent, setListaComent] = useState(listaTemp);   

    

    //console.log(listaComent);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="input-ntc" placeholder="Escreva um comentário"  {...register("texto")} />
            <input className="submit-ntc" type="submit" />
            {listaTemp}
        </form>
    )
}

export function PaginaNoticia() {

    let id = useParams().id;

    const [noticia, setNoticia] = useState([]);
    


    //ver dados da noticia
    useEffect(() => {

        verNoticia(id).then(
            (response) => {
                setNoticia(response.data)
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )   

    }, [id]);
 
    


    return (
        <>
            <Header />
            <div id="noticia">

                <h1>{noticia.titulo}</h1>
                <br/><br/>
                <h3 className="quebra-linha" >{noticia.conteudo}</h3>

                {Coment(id)}
    


            </div>

            <div className="luz-ntc"></div>

        </>
    )
}