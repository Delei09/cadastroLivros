const usuarios = { }
const livros = { }

//Salvar usuarios

const sequence = {
    _id : 1,
    get id() {
        return this._id++  
    }
}



function salvaUsuario(usuario){
    console.log('to no salvar usuario')
    if (!usuario.id) usuario.id = sequence.id     
    usuarios[usuario.id] = usuario;   
    return usuario   
}

function getUsuario(id){
    return usuarios[id] || {}      
}

function getUsuarios(){
    console.log('requisição get')
    return Object.values(usuarios)  /// retorna o valores dentro do objto
}
function deleteUsuarios(id){
    const usuario = usuarios[id]
    delete usuarios[id]
    return usuarios  
}

//salvar livros

const sequenceLivros = {
    _id : 1,
    get id() {
        return this._id++  
    }
}


function salvarLivro(livro){
    if (!livro.id) livro.id = sequenceLivros.id     
    livros[livro.id] = livro;  
    return livro   
}

function getLivros(id){
    return livros[id] || {}      
}

function getLivro(){
    console.log('requisição get')
    return Object.values(livros)  /// retorna o valores dentro do objto
}
function deleteLivros(id){
    const livro = livros[id]
    delete livros[id]
    return livros  
}

module.exports = {salvaUsuario, getUsuario, getUsuarios, deleteUsuarios, getLivro, getLivros, salvarLivro, deleteLivros}