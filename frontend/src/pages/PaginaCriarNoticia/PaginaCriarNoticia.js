import { Header } from "../../components/Header/Header";
import { enviarNoticia } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Formulario() {
    const nav = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarNoticia(data.titulo, data.conteudo).then((response)=>{
        nav("/")

        }).catch((error)=>console.log(error))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{"marginLeft":"35vw"}} {...register("titulo")} />
            <input {...register("corpo")} />
            <input type="submit" />
        </form>
    )
}

export function PaginaCriarNoticia(){
    return(
        <>
        <Header/>
        <Formulario/>
        

        </>
    )
}