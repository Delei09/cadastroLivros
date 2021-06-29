import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Card from '../components/Card';

const Dashboard = () =>  {
  return (
    <>
      <Header titulo =  'Dashboard' icone = 'dash' />
      <Nav />
      <Main titulo = 'Informações' subtitulo = 'Dados sobre quantidade de usuarios, livros e de livros emprestados' >
        <Card/>
      </Main>
    </>
  );
}

export default Dashboard;
