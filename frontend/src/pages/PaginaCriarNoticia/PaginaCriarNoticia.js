import { Header } from "../../components/Header/Header";
import { enviarNoticia } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./PaginaCriarNoticia.css"

function Formulario() {
    const nav = useNavigate();


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarNoticia(data.titulo, data.conteudo).then((response)=>{
        nav("/")

        }).catch((error)=>console.log(error))
    };
    return (
        <form id="form-criar"  onSubmit={handleSubmit(onSubmit)} >
            <input className="input-titulo" placeholder="título"{...register("titulo")} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }} />
            <textarea className="input-conteudo" type="text" placeholder="conteúdo" {...register("conteudo")}></textarea>
            <input className="submit-criar" value="Criar" type="submit"/>
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