import React from 'react'



export default (props) => (
    
<div className="App">
    <div className="img-container">
    <h1>{props.nombre}</h1>
    <h3>{props.autor}</h3>
    <img src={props.imgUrl} />
    </div>
    <div className="description">
    <p >
        {props.descripcion}
    </p>
    <p>{props.precio}</p>
    <p>{props.rating}</p>
    </div>
   
</div>
)