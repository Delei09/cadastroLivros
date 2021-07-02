const express = require('express')
const porta = 3003
const app =  express()
const bancoDeDados = require('./bancoDeDados')
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Funções Usuarios

app.get('/usuario' , (req, res, next) =>{
    res.send(bancoDeDados.getUsuarios())
})

app.get('/usuario/:id' , (req, res, next) =>{
    res.send(bancoDeDados.getUsuario(req.params.id))  
 } )
 
app.listen(porta , () =>{
    console.log('back end na porta ' , + porta)
})

app.post('/usuario' , (req , res, next) => {
    const produto = bancoDeDados.salvaUsuario({
        nome: req.body.Nome,    //como pegar atributo pelo post
        email: req.body.Email,
        telefone: req.body.Celular,
        senha: req.body.Senha,
    })
    res.send(produto)  //gera json
})

app.put('/usuario/:id' , (req , res, next) => {
    const produto = bancoDeDados.salvaUsuario({
        id: req.params.id,
        nome: req.body.Nome,    //como pegar atributo pelo post
        email: req.body.Email,
        telefone: req.body.Celular,
        senha: req.body.Senha,
    })
    res.send(produto)  //gera json
})

app.delete('/usuario/:id' , (req , res, next) => {
    console.log(' To no delete')
    const usuario = bancoDeDados.deleteUsuarios(req.params.id)
    res.send(usuario)  
})


//Funções livros

app.get('/livros' , (req, res, next) =>{
    res.send(bancoDeDados.getLivro())
})

app.get('/livros/:id' , (req, res, next) =>{
    res.send(bancoDeDados.getLivros(req.params.id))   } )

app.post('/livros' , (req , res, next) => {
    const livro = bancoDeDados.salvarLivro({
        nome: req.body.Nome,  
        autor: req.body.Autor,
        usuario: req.body.Usuario,
        senha: req.body.Senha,
    })
    res.send(livro) 
})

app.put('/livros/:id' , (req , res, next) => {
    const livro = bancoDeDados.salvarLivro({
        id: req.params.id,
        nome: req.body.Nome,  
        email: req.body.Tipo,
        telefone: req.body.Autor,
        senha: req.body.Senha,
    })
    res.send(livro) 
})

app.delete('/livros/:id' , (req , res, next) => {
    const livro = bancoDeDados.deleteLivros(req.params.id)
    res.send(livro)  
})