import Home from './/Home';
import Dashboard from './Dashboard';
import Usuario from './Usuario'
import Livros from './Livros';
import LivrosEmprestados from './LivrosEmprestados';
import React from 'react'
import {Switch, Route } from 'react-router-dom'

const Rotas = () => {
    return(
        <Switch>
            <Route exact path =  '/'>
                <Home />
            </Route>
            <Route path = '/dashboard'>
                <Dashboard />
            </Route>
            <Route  path =  '/livros'>
                <Livros />
            </Route>
            <Route path = '/usuario'>
                <Usuario />
            </Route>
            <Route path = '/livrosEmprestados'>
                <LivrosEmprestados />
            </Route>
        </Switch>
    )
}

export default Rotas