import React, { useState } from 'react'
import style from './Formulario.module.css'


const Formulario = ({input, value, setValue}) => {

const [formula , setFormula] = useState(value)

function setar(e){
    const valor = e.target.value 
    const id = e.target.id 
    setFormula( {...formula , [id] : valor} )
    setValue(formula)
    console.log(value)
}

    return(
        <>
            <form className = {style.formulario}>
                <h1> {formula.nome} </h1>
                {input.map( dados => {
                    return(
                        <div className = {style.item} key = {dados}>
                            <label for={dados} className="form-label">{dados}: </label>
                            <input type="text" className="form-control" id= {dados} onChange = {e =>  setar(e) } />
                        </div>
                    )
                   
                })}
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>

        </>
    )
}

export default Formulario;


