import "./Comentario.css"

export function Comentario(nome, coment) {
    return (
        <div id="comentario">
            <h3>{nome}</h3>
            <br/>
            <h4>{coment}</h4>
        </div>
    )
}