import React from "react";
import styles from "../css-modules/Checkout.module.css";

export default ({
  cart,
  calculateTotal,
  handleSubmit,
  user,
  warning,
  handlePasswordInput
}) => {
  const arrayBook = [];
  for (let book of Object.values(cart)) {
    arrayBook.push(book);
  }

  return (
    <div className="container text-center" id={styles.checkoutContainer}>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Checkout</h1>
        <div className="form-group">
          {/^(f|g)\d\d\d\d\d\d+/.test(user.username) ? (
            false
          ) : (
            <div>
              <div>
                <label>Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Confirmar Contraseña"
                  onChange={event => handlePasswordInput(event.target.value)}
                  required
                />
              </div>
              <h5 className="text-danger">{warning}</h5>
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email || ""}
            className="form-control"
            placeholder="Correo"
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección de facturación</label>
          <input
            type="text"
            id="shipping"
            name="shipping"
            defaultValue={user.address || ""}
            className="form-control"
            placeholder="dirección de facturación"
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección de envío</label>
          <input
            type="text"
            id="shippingEnvio"
            name="shippingEnvio"
            defaultValue={user.address || ""}
            className="form-control"
            placeholder="Shipping Email Adress"
            required
          />
        </div>
        {Object.keys(cart).length ? (
          <div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Título</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cart).map((bookId, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{cart[bookId][2]}</td>
                      <td>{cart[bookId][0]}</td>
                      <td>${cart[bookId][1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pull-right">
              Total: ${calculateTotal(arrayBook)}{" "}
            </div>
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="btn btn-primary btn-block">
          Confirmar
        </button>
      </form>
    </div>
  );
};
