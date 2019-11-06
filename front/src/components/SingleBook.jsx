import React from 'react'



export default (props) => (
    
<div>
{console.log(props)}
    <h1>{props.titulo}</h1>
    <h3>{props.autor}</h3>
    <img src={props.imgUrl} />
    <p>
        {props.descripcion}
    </p>
    <p>{props.precio}</p>
    <p>{props.rating}</p>
</div>
)