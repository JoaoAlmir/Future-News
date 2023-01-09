import "./PaginaLogin.css"
import { Header } from "../../components/Header/Header"


export function PaginaLogin(){
    return(
        <>
            <Header/>

            <input className="input-login" type='text' placeholder="Email"/>
            <input className="input-login" type='text' placeholder="Senha"/>
            <input className="submit-login" value="Logar" type="submit"/>

        </>
    )
}