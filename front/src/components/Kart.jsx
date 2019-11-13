import styles from "../css-modules/kart.module.css";

import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect } from "react";

export default props => {
  const arrayBook = [],
    arrayIds = [];
  let enoughStockToBuy = {};
  for (let book of Object.values(props.cart)) {
    arrayBook.push(book);
  }
  for (let id of Object.keys(props.cart)) {
    arrayIds.push(id);
  }
  let refreshedCart,
    userNotLoggedIn = props.userId;
  if (!userNotLoggedIn) {
    if (props.firstTime) {
      refreshedCart = JSON.parse(localStorage.getItem("cart"));
      props.refresh();
      props.fetchCart(0, refreshedCart);
    } else {
      localStorage.setItem("cart", JSON.stringify(props.cart));
    }
  }
  return (
    <div>
      <button
        id="slide-button"
        className={styles.fixedbtn + " btn  btn-info"}
        onClick={() => {
          if (
            !$("#slider").hasClass("open") &&
            !$("#slider-history").hasClass("open")
          ) {
            $("#history-button").toggleClass("moved");
            $("#slide-button").toggleClass("moved");
          } else if ($("#slider").hasClass("open")) {
            $("#history-button").toggleClass("moved");
            $("#slide-button").toggleClass("moved");
          }
          $("#slider-history").removeClass("open");
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
              props.bookStocks[arrayIds[index]] >= book[0]
                ? (enoughStockToBuy[arrayIds[index]] = true)
                : (enoughStockToBuy[arrayIds[index]] = false);
              return (
                <div key={index}>
                  <li className={styles.bookList}>
                    <button
                      onClick={() => {
                        confirm(
                          "¿Está seguro que quiere eliminar del carrito?"
                        ) &&
                          props.delFromCart(
                            Object.keys(props.cart)[index],
                            props.userId
                          );
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
                            ? props.delFromCart(
                                Object.keys(props.cart)[index],
                                props.userId
                              )
                            : props.handleDecrement(
                                Object.keys(props.cart)[index],
                                props.userId
                              )
                        }
                      >
                        -
                      </button>
                      {props.bookStocks[arrayIds[index]] <= book[0] ? (
                        <strong>No more Stock</strong>
                      ) : (
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            props.handleIncrement(
                              Object.keys(props.cart)[index],
                              props.userId
                            )
                          }
                        >
                          +
                        </button>
                      )}
                    </div>
                  </li>
                  <hr></hr>
                </div>
              );
            })}
          </ul>

          <div className="cart-buttons">
            <button
              onClick={() => {
                if (confirm("¿Está seguro de que desea borrar su carrito?")) {
                  let noUser = props.userId === undefined;
                  props.handleEmpty(noUser);
                }
              }}
              href="#0"
              className={"btn btn-danger " + styles.block}
            >
              Vaciar
            </button>
            {Object.values(enoughStockToBuy).reduce((bool, stockavailable) => {
              return stockavailable && bool ? true : false;
            }, true) ? (
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
                Checkout{" "}
                <span className="total-price">
                  {" "}
                  ${props.calculateTotal(arrayBook)}
                </span>
              </button>
            ) : (
              <strong>Not enough Stock</strong>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
