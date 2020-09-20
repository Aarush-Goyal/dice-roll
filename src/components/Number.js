import React from 'react';

const Number = (props) => {
    return(
    <h1 className="Number" onClick={()=>{
        window.location.reload()
    }}>
        {props.numBer}
    </h1>
    );
}

export default Number;