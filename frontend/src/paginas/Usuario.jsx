import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Formulario from '../components/Formulario';
import Tabela from '../components/Tabela';

const Usuario = () =>  {

  const [form , setForm] = useState({ Nome: "" , Email : "" , Celular : "" , Senha : ""})
  const [salvar, setSalvar] = useState()

  useEffect( () => {
    console.log('esta no effect')

  },salvar)
  
  return (
    <>
      <Header titulo =  'Usuario' icone = 'usuario' />
      <Nav />
      <Main titulo = 'Cadastrar Usuario' subtitulo = 'Salve seus dados ' >
            <Formulario input = {['Nome' , 'Email' , 'Celular' , 'Senha']} botao = {salvar} setBotao = {setSalvar} value = {form} setValue = {setForm} />
            <Tabela input = {['Nome' , 'Email' , 'Celular' ]} />
      </Main>
    </>
  );
}

export default Usuario;
