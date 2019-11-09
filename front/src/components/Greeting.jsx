import '../css-modules/greeting.module.css'
import React from 'react';

export default (props) =>{
    return (
        <h6>
            Hola, {props.name}
        </h6>
    )
}

