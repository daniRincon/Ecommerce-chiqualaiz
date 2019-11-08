import '../css-modules/greeting.module.css'
import React from 'react';

export default (props) =>{
    return (
        <h4 className='greeting' >
            Hola {props.name}!
        </h4>
    )
}

