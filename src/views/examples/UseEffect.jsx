import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function revel(num){
    const n = parseInt(num)
    if(n % 2 == 0) { return 'Par' }else{return 'Impar'}
}

const UseEffect = (props) => {
const [number,setNumber] = useState(1)
const [fatorial,setFatorial] = useState(1)

useEffect(()=>{
    setFatorial(calcFatorial(number))
},[number])
useEffect(()=>{
    if(fatorial > 1000000){
        document.title = "Biriru :P"
    }
})

const [parImpar,setParImpar] = useState('')
const [numberDesafio2,setNumber2] = useState(1)

useEffect(()=>{
    setParImpar(revel(numberDesafio2))
},[numberDesafio2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 1"/>
            <div className="center">
                <div>
                    <sapn className="text">Fatorial: </sapn>
                    <sapn className="text red">{fatorial === -1 ?'Não existe': fatorial}</sapn>
                </div>
                <input type="number" className="input"
                value={number}
                onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio 2"/>
            <div className='center'>
                <div>
                    <span className="text">E Par ou Impar:</span>
                    <span className="text red">{parImpar}</span>
                    <input type="number" className="input"
                    value={numberDesafio2}
                    onChange={e => setNumber2(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default UseEffect
