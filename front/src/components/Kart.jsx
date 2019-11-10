import styles from '../css-modules/kart.module.css'
import React from 'react';

export default (props) =>{
    const arrayBook = []
    for(let book of Object.values(props.cart)){
        arrayBook.push(book)
    }
    return (
        <div>
            <button id="slide-button" className={styles.fixedbtn + " btn btn-info"}
            onClick={() =>{ 
                $("#slide-button").toggleClass("moved")
                $("#slider").toggleClass("open")
            }
            }
            >
                <i className="fa fa-shopping-cart"></i>
            </button>

            <div id="slider" 
            className={"container " + styles.drawer}>
                <div className="shopping-cart">
                <div className="shopping-cart-head">

                </div>
                <ul className="shopping-cart-list">
                    {
                        arrayBook.map((book, index)=>{
                            return <li key={index}> {book[2]} :{book[1]} </li>
                        })
                    }
                </ul>
                <div className="cart-buttons">
                    <button href="#0" className="btn btn-danger">Vaciar</button>
                    <button href="#0" className="btn btn-success">Checkout - <span className="total-price">$0</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}