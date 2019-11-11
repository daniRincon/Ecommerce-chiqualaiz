import styles from "../css-modules/kart.module.css";

import React from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMinusCircle,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect } from "react";


export default props => {
  const arrayBook = [];
  for (let book of Object.values(props.cart)) {
    arrayBook.push(book);
  }
  let refreshedCart, userNotLoggedIn = props.userId;
  if(!userNotLoggedIn){
    if(props.firstTime){
      refreshedCart = JSON.parse(localStorage.getItem('cart'));
      props.refresh(); 
      props.fetchCart(0, refreshedCart)
    } else{
      localStorage.setItem('cart', JSON.stringify(props.cart))
    }                               
  }
  return (
    <div>
      <button
        id="slide-button"
        className={styles.fixedbtn + " btn  btn-info"}
        onClick={() => {
          $("#slide-button").toggleClass("moved");
          $("#slider").toggleClass("open");
        }}
      >
        <FontAwesomeIcon size="2x" icon={faShoppingCart} />
      </button>

      <div id="slider" className={"container " + styles.drawer}>
        <div className="shopping-cart">
          <div className="shopping-cart-head"></div>
          <ul className="shopping-cart-list">
            {arrayBook.map((book, index) => {
              return (
                <div key={index}>
                  <li className={styles.bookList}>
                    <button
                      onClick={() => {
                        confirm(
                          "¿Está seguro que quiere eliminar del carrito?"
                        ) && props.delFromCart(Object.keys(props.cart)[index], props.userId);
                      }}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                    {book[2]} <br></br>Precio: ${book[1]} Cantidad: {book[0]}
                    <div>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          arrayBook[index][0] === 1
                            ? props.delFromCart(Object.keys(props.cart)[index], props.userId)
                            : props.handleDecrement(
                                Object.keys(props.cart)[index], props.userId
                              )
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          props.handleIncrement(Object.keys(props.cart)[index], props.userId)
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                  <hr></hr>
                </div>
              );
            })}
          </ul>
          <div className="cart-buttons">
            <button href="#0" className={"btn btn-danger " + styles.block}>
              Vaciar
            </button>
            <button
              href="#0"
              className={"btn btn-success " + styles.block}
              onClick={() =>
                props.handleClick(
                  props.calculateTotal(arrayBook),
                  props.history
                )
              }
            >
              Checkout -
              <span className="total-price">
                {props.calculateTotal(arrayBook)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
