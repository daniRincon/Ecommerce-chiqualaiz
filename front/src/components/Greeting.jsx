import styles from '../css-modules/greeting.module.css'
import React from 'react';

export default (props) =>{
    return (
        <h6 className={styles.greeting}>
            Hola, {props.name}
        </h6>
    )
}

