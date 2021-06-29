import React from 'react'
import style from './Main.module.css'

const Main = (props) => {

    return(
        <main className = {style.main} >
            <h2> {props.titulo} </h2>
            <h5>{props.subtitulo} </h5>
            {props.children}
        </main>
    )
}

export default Main