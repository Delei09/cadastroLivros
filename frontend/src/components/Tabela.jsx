import React, { useEffect, useState } from 'react'
import style from './Tabela.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'


const Tabela = ({input, table, infoTable, funcao}) => {

    const [tabela, setTabela] = useState('')
    const [linha, setLinha] = useState('')

    
   
    function excluir(op){
        funcao({operacao : 'delete' , id: op})
    }

    function tabelaHead(){
       return input.map(dados => {
            return(
                <>
                <th scope="col">{dados} </th>
                </>
            )
        })
    }
    useEffect( () => {
        console.log(table)
            const ta = table.map( ({id ,nome , email, telefone }) => {
                return(
                   <tr key = {id}>
                       <th scope="row"> {id}  </th>
                       <td> {nome}  </td>
                       <td>{email} </td>
                       <td>{telefone} </td>
                       <td className = {style.opcao}> <FontAwesomeIcon icon = {faTrashAlt} onClick = {e => excluir(id)}/> 
                        
                        </td>
                   </tr>
                )
            })
            setTabela(ta)
            
    },[infoTable])
        

    return(
        <div className =  {style.tabela}>
              <table className= {`table`}>
                <thead>
                    <tr>
                    {tabelaHead()}
                    </tr>
                </thead>
                <tbody>
                    {tabela}
                </tbody>
            </table>
        </div>
          
    )
}

export default Tabela;