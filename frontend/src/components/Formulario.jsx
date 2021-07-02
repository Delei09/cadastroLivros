import React, { useState } from 'react'
import style from './Formulario.module.css'


const Formulario = ({input, value, setValue, botao , setBotao}) => {

const [formula , setFormula] = useState(value)

function setar(e){
    const valor = e.target.value 
    const id = e.target.id 
    setFormula( {...formula , [id] : valor} )
    setValue(formula)
}
function salvar(e){
    e.preventDefault()
    setBotao('clicado')

}

    return(
        <>
            <form className = {style.formulario} onSubmit = {e => salvar(e)} >
                <h1> {formula.nome} </h1>
                {input.map( dados => {
                    return(
                        <div className = {style.item} key = {dados}>
                            <label for={dados} className="form-label">{dados}: </label>
                           { dados === 'Senha' ?   <input type= 'password' className="form-control" id= {dados} onChange = {e =>  setar(e) } /> : '' }
                           {dados !== 'Senha'?  <input type={dados} className="form-control" id= {dados} onChange = {e =>  setar(e) } />  : ''}
                        </div>
                    )
                   
                })}
                <button type="submit" className="btn btn-primary" >Salvar</button>
            </form>

        </>
    )
}

export default Formulario;


