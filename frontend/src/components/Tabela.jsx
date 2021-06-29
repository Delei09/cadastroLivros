import React from 'react'
import style from './Tabela.module.css'


const Tabela = ({input}) => {

    function tabelaHead(){
       return input.map(dados => {
            return(
                <th scope="col">{dados} </th>
            )
        })
    }
    function tabelaBody(){
        return input.map(dados => {
             return(
                <tr>
                    <th scope="row">Nome</th>
                    <td>Email</td>
                    <td>324214224</td>
                </tr>
             )
         })
     }

    return(
            <table className= {`table ${style.tabela}`}>
                <thead>
                    <tr>
                    {tabelaHead()}
                    </tr>
                </thead>
                <tbody>
                    {tabelaBody()}
                </tbody>
            </table>
    )
}

export default Tabela;