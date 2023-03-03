import "./PaginaCadastro.css"
import { Header } from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { enviarUsuario } from "../../api/axios";

function Formulario() {
    const nav = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarUsuario(data.nome, data.email, data.senha, "2").then((response)=>{
        nav("/")

        }).catch((error)=>console.log(error))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className="input-cadastro" type='text' placeholder="Nome" {...register("nome")} />
            <input className="input-cadastro" type='text' placeholder="Email" {...register("email")}/>
            <input className="input-cadastro" type='password' placeholder="Senha" {...register("senha")}/>

            <input className="submit-cadastro" value="Cadastrar" type="submit"/>

        </form>
    )
}


export function PaginaCadastro(){
    return(
        <>
            <Header/>
            <Formulario/>
            
        </>
    )
}