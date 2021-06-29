import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'

const Home = () =>  {
  return (
    <>
      <Header titulo =  'Home' icone = 'home' />
      <Nav />
      <Main titulo = 'Seja Bem Vindo ao Serviço de Emprestimo de Livros' 
          subtitulo =  "Sistema Desenvolvido para adicionar novos usuarios,
           livros e para emprestar livros entre eles." >
          <FontAwesomeIcon className = 'fa-10x' icon = {faBookReader} />
      </Main>
    </>
  );
}

export default Home;
