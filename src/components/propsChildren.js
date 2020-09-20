import React from 'react';

const PropsChildren = (props) => {
    return(
        <div>
            <h1>Reload The page </h1>
            {props.children}
        </div>
    );
}

export default PropsChildren;