const express = require('express')
const bodyParser = require('body-parser')
const porta = 3003
const app =  express()
const bancoDeDados = require('./bancoDeDados')



//app.use usa esse metodo em todas as requisições
app.use(bodyParser.urlencoded({extended: true}))  ///urlencoded retorna uma função midle q faz um parse no body da requisição
//npm 

///usuario é como se fosse a url
app.get('/usuario' , (req, res, next) =>{
    res.send(bancoDeDados.getUsuarios())
})
//'/usuario/:id' url com id
app.get('/usuario/:id' , (req, res, next) =>{
    res.send(bancoDeDados.getUsuario(req.params.id))   //req vem os paramentros do BD ,  res é a resposta q a gent envia
} )
app.listen(porta , () =>{
    console.log('servidor na porta ' + porta)
})
// req é o q vem 
// salvar produto no banco de dados
app.post('/usuario' , (req , res, next) => {
    const produto = bancoDeDados.salvaUsuario({
        nome: req.body.nome,    //como pegar atributo pelo post
        preco: req.body.preco
    })
    res.send(produto)  //gera json
})

app.put('/usuario/:id' , (req , res, next) => {
    const produto = bancoDeDados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,    //como pegar atributo pelo post
        preco: req.body.preco
    })
    res.send(produto)  //gera json
})

app.delete('/usuario/:id' , (req , res, next) => {
    const usuario = bancoDeDados.deleteUsuario(req.params.id)
    res.send(usuario)  //gera json
})