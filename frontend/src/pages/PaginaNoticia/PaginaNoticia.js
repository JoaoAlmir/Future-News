import { useForm } from "react-hook-form";
import { enviarComentario } from "../../api/axios";
import { Header } from "../../components/Header/Header";
import "./PaginaNoticia.css"

function Comentario(nome,coment){
    return(
        <div id="comentario">
            <h3>{nome}</h3>
            <br/>
            <h4>{coment}</h4>
        </div>
    )
}

function Formulario() {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarComentario(data.nome, data.conteudo).then((response)=>{

        }).catch((error)=>console.log(error))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="input-ntc" placeholder="Escreva um comentário"  {...register("titulo")} />
            <input className="submit-ntc" type="submit" />
        </form>
    )
}

export function PaginaNoticia() {
    return (
        <>
            <Header />
            <div id="noticia">

                <h1>Titulo awdapodawndp aowdn apwdoanwd poawdn apow n</h1>
                <br/><br/>
                <h3>bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</h3> 
                
                {Formulario()}

                {Comentario("ronaldo","bla bla bla bla bla bla blabla lbal blab la blaalba lbalbal bal")}
                
            
            </div>

            <div className="luz-ntc"></div>

        </>
    )
}