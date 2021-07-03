import React, { useEffect, useState } from 'react'
import style from './Tabela.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Tabela = ({input, table, infoTable, funcao}) => {

    const [tabela, setTabela] = useState('')

    function excluir(op){
        funcao({operacao : 'delete' , id: op})
    }

    function tabelaHead(){
       return input.map(dados => {
            return(
                <th scope="col">{dados}</th>
            )
        })
    }
    useEffect( () => {
            const ta = table.map( ({id ,nome , autor, usuario})  => {
                return(
                   <tr key = {id}>
                       <th scope="row">{id}</th>
                       <td>{nome}</td>
                       <td>{autor}</td>
                       <td>{usuario}</td>
                       <td className = {style.opcao}><FontAwesomeIcon icon = {faTrashAlt} onClick = {e => excluir(id)}/></td>
                   </tr>
                )
            })
            setTabela(ta)
            
    },[infoTable])
        
    return(
            <table className= {`table ${style.tabela}`}>
                <thead>
                    <tr>
                    {tabelaHead()}
                    </tr>
                </thead>
                <tbody>{tabela}</tbody>
            </table>
    )
}

export default Tabela;