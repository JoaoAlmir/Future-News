import "./PaginaCadastro.css"
import { Header } from "../../components/Header/Header"


export function PaginaCadastro(){
    return(
        <>
            <Header/>

            <input className="input-cadastro" type='text' placeholder="Nome"/>
            <input className="input-cadastro" type='text' placeholder="Email"/>
            <input className="input-cadastro" type='text' placeholder="Senha"/>

            <input className="submit-cadastro" value="Cadastrar" type="submit"/>
        </>
    )
}