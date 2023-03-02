import "./PaginaLogin.css"
import { Header } from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { enviarLogin } from "../../api/axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import { useContext } from "react";

function Formulario() {
    const nav = useNavigate();
    const auth = useContext(AuthContext);


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarLogin(data.email, data.senha).then((response)=>{
        auth.setToken(response.data.token)
        auth.setNome(response.data.nome)
        auth.setFuncao(response.data.funcao)
        nav("/")

        }).catch((error)=>console.log(error))
    };
    return (
        <form id="form-criar"  onSubmit={handleSubmit(onSubmit)} >
            <input className="input-login" type='text' placeholder="Email" {...register("email")} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }} />
            <input className="input-login" type='text' placeholder="Senha" {...register("senha")} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}/>
            <input className="submit-login" value="Logar" type="submit"/>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <>
            <Header/>
            <Formulario/>
           

        </>
    )
}