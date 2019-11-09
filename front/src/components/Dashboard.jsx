import React from 'react';
import '../css-modules/Dashboard.module.css'

export default (props) =>{
    return (
        <div className="btn-group-vertical dashboard">
            <button className="btn btn-info">Agregar productos</button> 
            <button className="btn btn-info">Editar productos</button> 
            <button className="btn btn-info">Crear género</button> 
            <button className="btn btn-info">Órdenes</button> 
            <button className="btn btn-info">Editar usuarios</button> 
            <button className="btn btn-info">Editar categoría</button> 
        </div>
    )
}

