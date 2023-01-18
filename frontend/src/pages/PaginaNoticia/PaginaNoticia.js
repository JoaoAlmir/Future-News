import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { enviarComentario, verComentarios, verNoticia } from "../../api/axios";
import { Comentario } from "../../components/Comentario/Comentario";
import { Header } from "../../components/Header/Header";
import "./PaginaNoticia.css"



function Formulario() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarComentario(data.nome, data.conteudo).then((response) => {

        }).catch((error) => console.log(error))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="input-ntc" placeholder="Escreva um comentário"  {...register("titulo")} />
            <input className="submit-ntc" type="submit" />
        </form>
    )
}

export function PaginaNoticia() {

    const [noticia, setNoticia] = useState([]);
    const [comentario, setComentario] = useState([]);


    let id = useParams().id;


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

        // verComentarios(id).then(
        //     (response) => {
        //         setComentario(response.data)
        //     }
        // ).catch(
        //     (error) => {
        //         console.log(error);
        //     }
        // )

    }, [id]);


    
    


    return (
        <>
            <Header />
            <div id="noticia">

                <h1>{noticia.titulo}</h1>
                <br /><br />
                <h3 className="quebra-linha" >{noticia.conteudo}</h3>

                {Formulario()}


            {/* <Comentario titulo="pablo" conteudo="blabalblablalba balbalba" ></Comentario>                 */}

            </div>

            <div className="luz-ntc"></div>

        </>
    )
}