import "./Card.css"

export function Card(prop){

    return(
        <div className="card">
            <div className="delete"> <h1> X </h1> </div>
            <h1> {prop.titulo} </h1>
        </div>
    )

}