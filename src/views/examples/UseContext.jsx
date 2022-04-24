import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../dataContext/Store'

const UseContext = (props) => {
    const {number,setNumber,text} = useContext(AppContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title='exercicio 1'/>
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
            </div>
            <div className="center">
                <button className="btn" onClick={_=>setNumber(number - 1)}>-1</button>
                <button className="btn" onClick={_=>setNumber(number + 1)}>+1</button>
            </div>

        </div>
    )
}

export default UseContext
