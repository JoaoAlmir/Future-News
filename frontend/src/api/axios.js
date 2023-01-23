import axios from "axios"

export function verNoticia(id) {
    return (axios({
        method: 'GET',
        url: "http://localhost:9999/noticias/" + id,
    })
    )
}

export function verNoticias() {
    return (axios({
        method: 'GET',
        url: "http://localhost:9999/noticias",
    })
    )
}

export function verUsuario(id) {
    return (axios({
        method: 'GET',
        url: "http://localhost:9999/usuarios/" + id,
    })
    )
}

export function enviarUsuario(nome, email, senha, funcao) {
    return (axios({
        method: 'POST',
        url: "http://localhost:9999/usuarios",
        data: { nome: nome, email: email,senha:senha, funcao:funcao }
    })
    )
}

export function verComentariosPost(id) {
    return (axios({
        method: 'GET',
        url: "http://localhost:9999/comentarios/post/" + id,
    })
    )
}

export function enviarNoticia(titulo, conteudo) {
    return (axios({
        method: 'POST',
        url: "http://localhost:9999/noticias",
        data: { titulo: titulo, conteudo: conteudo }
    })
    )
}

export function enviarComentario(titulo, conteudo) {
    return (axios({
        method: 'POST',
        url: "http://localhost:9999/comentarios",
        data: { titulo: titulo, cpnteudo: conteudo }
    })
    )
}