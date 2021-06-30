const usuarios = {  }

const sequence = {
    _id : 1,
    get id() {
        return this._id++   /// sempre q chama sequence vai seta o id
    }
}


function salvaUsuario(usuario){
    if (!usuario.id) usuario.id = sequence.id      //// !usuarios.id ve se esta setado o usuarios id
    usuarios[usuario.id] = usuario;    ///atualiza ou mantem q foi passado na linha acima
    return usuario   ////ja vai ter o id
}

function getUsuario(id){
    return usuarios[id] || {}      // retorna usuario q contem o id se nao tiver retorna objeto vazio
}

function getUsuarios(){
    return Object.values(usuarios)  /// retorna o valores dentro do objto
}
function deleteUsuarios(id){
    const usuario = usuarios[id]
    delete usuarios[id]
    return usuario   /// retorna o valores dentro do objto
}

module.exports = {salvaUsuario, getUsuario, getUsuarios, deleteUsuarios}