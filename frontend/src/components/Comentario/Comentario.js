import "./Comentario.css"

export function Comentario(prop) {
    return (
        <div className="comentario">
            <h2>{prop.nome}</h2>
            <br/>
            <h4>{prop.coment}</h4>
        </div>
    )
}