import axios from "axios"

export function verNoticia(id){
    return(axios({
        method: 'GET',
        url: "http://localhost:9999/noticias/id",
       })
    )
}

export function verNoticias(){
    return(axios({
        method: 'GET',
        url: "http://localhost:9999/noticias",
       })
    )
}

export function enviarNoticia(titulo, conteudo){
    return(axios({
        method: 'POST',
        url: "http://localhost:9999/noticias",
        data: {titulo:titulo, cpnteudo:conteudo}
       })
    )
}

export function enviarComentario(titulo, conteudo){
    return(axios({
        method: 'POST',
        url: "http://localhost:9999/comentarios",
        data: {titulo:titulo, cpnteudo:conteudo}
       })
    )
}

export function verComentario(titulo, conteudo){
    return(axios({
        method: 'GET',
        url: "http://localhost:9999/comentarios",
        data: {titulo:titulo, cpnteudo:conteudo}
       })
    )
}