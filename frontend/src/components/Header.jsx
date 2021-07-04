import React from 'react'
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faUser , faBook} from '@fortawesome/free-solid-svg-icons'

const home = faHome;
const usuario = faUser;
const dash = faChartLine;
const livro = faBook;

const Header = ({titulo,icone}) => {
   
    function ico(){
        if(icone === 'home'){
            return home
        }
        if(icone === 'dash'){
            return dash
        }
        if(icone === 'usuario'){
            return usuario
        }
        if(icone === 'livro'){
            return livro
        }
    }

    return(
        <header className = {style.header}>
            <h1>Serviço de Empréstimo de livros</h1>
            <div className ={style.pagina}>
                <h2> {titulo}  </h2>
                <FontAwesomeIcon className = 'fa-2x' icon={ico()} />
            </div>
        </header>
    )
}

export default Header