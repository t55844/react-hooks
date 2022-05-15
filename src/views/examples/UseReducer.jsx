import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    olther:'..',
    cart:[],
    user:null,
    number: 0
}

function reducer(state,action){
    switch (action.type) {
        case "add2":
            return {...state, number:state.number + 2}
            break;
        case "multi7":
            return {...state, number:state.number * 7}
            break;
        case "div25":
            return {...state, number:state.number / 25}
            break;
        case "arredonda":
            return {...state, number:parseInt(state.number)}
            break;
        
        case "addNumber" :
            return {...state, number : action.payload}
            break;
        case "login" :
            return {...state, user : {name : action.payload}}
            break;
    
        default:
            return state
            break;
    }
}

const UseReducer = (props) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 1"/>
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span>
                : <span className="text">Nenhum usuario</span>}
                <button className="btn" 
                onClick={()=>dispatch({type:'login', payload: 'Eduel'})}>Logar-se</button>

                <span className="text">{state.number}</span>
                <div className="center">
                    <button className="btn" onClick={()=>{
                        dispatch({type:'add2'})
                    }}>+2</button>
                </div>
            </div>
            <SectionTitle title="Exercicio 2"/>
            <div className="center">
                    <button className="btn" onClick={()=>{
                        dispatch({type:'multi7'})
                    }}>*7</button>
                    <button className="btn" onClick={()=>{
                        dispatch({type:'div25'})
                    }}>/25</button>
                    <button className="btn" onClick={()=>{
                        dispatch({type:'arredonda'})
                    }}>arredondar</button>
                    <input className='input' type="number" onChange={e=>dispatch({type:'addNumber', payload:e.target.value})} />

            </div>
        </div>
        )
}

export default UseReducer
