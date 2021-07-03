import React from 'react'
import style from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faUser , faBook} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Card = () => {

    return(
        <>
        <div className = {style.cardDash}>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Usuario <FontAwesomeIcon icon = {faUser} /> </h5>
                    <p className="card-text">4</p>
                   <Link to ="/usuario" className="btn btn-primary">Cadastrar/Excluir</Link>
                </div>
            </div>
               <div className="card" >
               <div className="card-body">
                   <h5 className="card-title">Livros <FontAwesomeIcon icon ={faBook} /> </h5>
                   <p className="card-text">4</p>
                  <Link to ="/livros" className="btn btn-primary">Cadastrar/Excluir</Link>
               </div>
           </div>
        </div>
           <div className = {`card ${style.opcao}`} >
                <div className="card-body">
                    <h5 className="card-title">Livros Emprestados <FontAwesomeIcon icon ={faSmile} />   </h5>
                    <p className="card-text">0</p>
                   <Link to ="/livrosEmprestados" className="btn btn-primary">Emprestar/Devolver</Link>
                </div>
            </div>
        </>
    )
}

export default Card;