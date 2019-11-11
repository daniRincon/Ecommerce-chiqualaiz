import React from 'react';
import { Link } from "react-router-dom";
import styles from '../css-modules/Dashboard.module.css'

export default (props) =>{
    if(props.authorized > 1){
    return (
       <div className={"btn-group-vertical " + styles.dashboard}>
                <Link to="/dashboard/add"><button className={"btn btn-info " + styles.btn} >Agregar productos</button> </Link>
                <button onClick={() => {
                    props.history.push('/')}
                    } className={"btn btn-info " + styles.btn}>Editar productos</button> 
                <button className={"btn btn-info " + styles.btn}>Crear género</button> 
                <button className={"btn btn-info " + styles.btn}>Órdenes</button> 
                <button className={"btn btn-info " + styles.btn}>Editar usuarios</button> 
                <button className={"btn btn-info " + styles.btn}>Editar categoría</button> 
            </div>
    )
    } else {
        return (
            <h3 className="text-danger"> ACCESS DENIED</h3>
        )
    }

}

