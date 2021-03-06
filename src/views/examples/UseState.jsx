import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {
    const [count,setCount] = useState(0)
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <div className='center'>
                <span className='text'>{count}</span>
                <div>
                <button className="btn" 
                onClick={()=> setCount(count +1)}>+1</button>
                <button className="btn" 
                onClick={()=> setCount(count -1)}>-1</button>
                <button className="btn" 
                onClick={()=> setCount(current => current + 1000)}>+1000</button>
            </div>    
            </div>
        </div>
    )
}

export default UseState
