import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('')
    const count = useRef(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    useEffect(()=>{
        count.current++
        ref2.current.focus()
    },[value1])
    useEffect(()=>{
        count.current++
        ref1.current.focus()
    },[value2])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="exercicio 1"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input ref={ref1} type="text" className="input" 
                value={value1} onChange={e=>{setValue1(e.target.value)}
                }/>
            </div>
            <SectionTitle title="exercicio 2"/>
            <div className="center">
            <input ref={ref2} type="text" className="input" 
                value={value2} onChange={e=>{setValue2(e.target.value)}}/>
            </div>
        </div>
    )
}

export default UseRef
