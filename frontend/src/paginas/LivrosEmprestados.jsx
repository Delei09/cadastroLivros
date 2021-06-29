import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Formulario from '../components/Formulario';
import Tabela from '../components/Tabela';
import {useState} from 'react'

const Livros = () =>  {
  return (
    <>
      <Header titulo =  'Livros' icone = 'livro' />
      <Nav />
      <Main titulo = 'Livros Emprestados/ Devolução' subtitulo = 'Acessa as opções para devolver ou para emprestar um livro' >
            <Tabela input = {['Nome' , 'Tipo' , 'Autor' ]} />
      </Main>
    </>
  );
}

export default Livros;