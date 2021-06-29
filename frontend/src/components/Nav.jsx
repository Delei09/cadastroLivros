import React from 'react'
import style from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Nav = (props) => {

    return(
        <nav className = {style.nav}>
            <FontAwesomeIcon className = {`${style.icone} fa-6x`} icon = {faBookReader} />
            <Link to = '/'> Home </Link>
            <Link to = '/dashboard'> Dashboard </Link> 
            <Link to = '/usuario' >Usuario</Link> 
            <Link to = '/livros' >Livros</Link>
            <Link to = '/livrosEmprestados' >Livros Emprestados</Link>
        </nav>
    )
}

export default Nav