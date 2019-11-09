import '../css-modules/greeting.module.css'
import React from 'react';

export default (props) =>{
    return (
        <h6 className='greeting'>
            Hola, {props.name}
        </h6>
    )
}

