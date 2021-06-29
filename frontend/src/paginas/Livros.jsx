import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Formulario from '../components/Formulario';
import Tabela from '../components/Tabela';
import {useState} from 'react'

const Livros = () =>  {
  const [form , setForm] = useState({ Nome: "" , Tipo : "" , Autor : "" , Senha : ""})
  return (
    <>
      <Header titulo =  'Livros' icone = 'livro' />
      <Nav />
      <Main titulo = 'Cadastrar Livros' subtitulo = 'Para cadastrar um livro vocẽ tera de ser um usuario' >
            <Formulario input = {['Nome' , 'Tipo' , 'Autor' , 'Senha']} value = {form} setValue = {setForm} />
            <Tabela input = {['Nome' , 'Tipo' , 'Autor' ]} />
      </Main>
    </>
  );
}

export default Livros;
