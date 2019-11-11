import styles from "../css-modules/kart.module.css";
import React from "react";

export default props => {
  const arrayBook = [];
  for (let book of Object.values(props.cart)) {
    arrayBook.push(book);
  }
  return (
    <div>
      <button
        id="slide-button"
        className={styles.fixedbtn + " btn btn-info"}
        onClick={() => {
          $("#slide-button").toggleClass("moved");
          $("#slider").toggleClass("open");
        }}
      >
        <i className="fa fa-shopping-cart"></i>
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
                        ) && props.delFromCart(Object.keys(props.cart)[index]);
                      }}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                    {book[2]} <br></br> {book[1]}$
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
            <button href="#0" className={"btn btn-success " + styles.block}>
              Checkout -
              <span className="total-price">
                $
                {parseFloat(
                  arrayBook.reduce((total, book) => total + Number(book[1]), 0)
                ).toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
