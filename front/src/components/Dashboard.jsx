import React from 'react';
import { Link } from "react-router-dom";
import '../css-modules/Dashboard.module.css'

export default (props) =>{
    if(props.authorized > 1){
    return (
       <div className="btn-group-vertical dashboard">
                <Link to="/dashboard/add"><button className="btn btn-info">Agregar productos</button> </Link>
                <button className="btn btn-info">Editar productos</button> 
                <button className="btn btn-info">Crear género</button> 
                <button className="btn btn-info">Órdenes</button> 
                <button className="btn btn-info">Editar usuarios</button> 
                <button className="btn btn-info">Editar categoría</button> 
            </div>
    )
    } else {
        return (
            <h3 className="text-danger"> ACCESS DENIED</h3>
        )
    }

}

