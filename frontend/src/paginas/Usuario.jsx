import React, {  useEffect, useState } from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Formulario from '../components/Formulario';
import Tabela from '../components/Tabela';
import axios from 'axios'

const Usuario = () =>  {

  const [form , setForm] = useState({ Nome: "" , Email : "" , Celular : "" , Senha : ""})
  const [clicado, setClicado] = useState('')
  const [tabela , setTabela] = useState([])
  const [info, setInfo] = useState('n')
  const [opcao, setOpcao] = useState('')

  useEffect( () => {

    if(clicado === 'clicado'){
      axios.post('http://localhost:3003/usuario' , form)
        .then( resp => resp.data)
        .then(dados =>  {
          setInfo('')
        }  )
      setClicado('')
    }
  },[clicado] )

  useEffect( () => {
    if(info === ''){
      axios.get('http://localhost:3003/usuario' )
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
      axios.delete(`http://localhost:3003/usuario/${id}` )
      .then(resp => setInfo(''))
    }
  },[opcao] )
  
  return (
    <>
      <Header titulo =  'Usuario' icone = 'usuario' />
      <Nav />
      <Main titulo = 'Cadastrar Usuario' subtitulo = 'Salve seus dados ' >
            <Formulario input = {['Nome' , 'Email' , 'Celular' , 'Senha']}
             botao = {clicado} setBotao = {setClicado} value = {form} setValue = {setForm} />
            <Tabela input = {[ 'ID' , 'Nome' , 'Email' , 'Celular', 'Excluir' ]} funcao = {setOpcao} infoTable = {info} table = {tabela} />
      </Main>
    </>
  );
}

export default  Usuario;
