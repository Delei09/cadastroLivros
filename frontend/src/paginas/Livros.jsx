import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Formulario from '../components/Formulario';
import TabelaLivros from '../components/TabelaLivros';
import {useState, useEffect} from 'react'
import axios from 'axios'

const Livros = () =>  {
  const [form , setForm] = useState({ Nome: "" , Tipo : "" , Autor : "" , Senha : ""})
  const [clicado, setClicado] = useState('')
  const [tabela , setTabela] = useState([])
  const [info, setInfo] = useState('')
  const [opcao, setOpcao] = useState('')

  useEffect( () => {

    if(clicado === 'clicado'){
      axios.post('http://localhost:3003/livros' , form)
        .then( resp => resp.data)
        .then(dados =>  {
          setInfo('')
        }  )
      setClicado('')
    }
  },[clicado] )

  useEffect( () => {
    if(info === ''){
      axios.get('http://localhost:3003/livros' )
      .then(resp => resp.data)
      .then(dados => {
        setTabela(dados)
        setInfo('ok')
      })   
    }
  },[info])
  
  useEffect( () => {
    const {operacao , id} = opcao
    if(operacao === 'delete'){
      axios.delete(`http://localhost:3003/livros/${id}` )
      .then(resp => setInfo(''))
    }
  },[opcao] )
  
  return (
    <>
      <Header titulo =  'Livros' icone = 'livro' />
      <Nav />
      <Main titulo = 'Cadastrar Livro' subtitulo = 'Salve seus dados ' >
            <Formulario input = {['Nome' , 'Autor' , 'Usuario' , 'Senha']}
             botao = {clicado} setBotao = {setClicado} value = {form} setValue = {setForm} />
            <TabelaLivros input = {[ 'ID' , 'Nome' , 'Autor' , 'Usuario', 'Excluir' ]} funcao = {setOpcao} infoTable = {info} table = {tabela} />
      </Main>
    </>
  );
}


export default Livros;
