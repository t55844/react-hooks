import React from "react";

const pera = props=>{
    console.log('botoes renderizando....')
    return(
        <div>
            <button className="btn" onClick={_=>props.inc(6)}>+6</button>
            <button className="btn" onClick={_=>props.inc(12)}>+12</button>
            <button className="btn" onClick={_=>props.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(pera)