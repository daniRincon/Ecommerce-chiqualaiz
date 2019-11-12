import React from "react";
import styles from "../css-modules/Checkout.module.css";

export default ({ cart, calculateTotal, user }) => {
  const arrayBook = [];
  for (let book of Object.values(cart)) {
    arrayBook.push(book);
  }

  const checkOut = ()  => {
    if(user.id){
      return axios
    .post('api/checkOut')
    .then(data => console.log(data))
    }else{
      return alert('Login required to purchase')
    }
  } 

 const handleSubmit = e => {
    e.preventDefault()
    checkOut()

  };

  return (
    <div className="container text-center" id={styles.checkoutContainer}>

      <form onSubmit={(e) => {return handleSubmit(e) }}> 
        <h1>Checkout</h1>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Confirmar Contraseña"
            required
          />
        </div>
        <div className="form-group">
          <label>Billing Email Adress</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Billing Email Adress"
            required
          />
        </div>
        <div className="form-group">
          <label>Shipping Email Adress</label>
          <input
            type="text"
            id="shipping"
            name="shipping"
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
            <div className="pull-right">Total: {calculateTotal(arrayBook)}</div>
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="btn btn-primary btn-block">
          Confirmar
        </button>
        <div></div>
      </form>
    </div>
  );
};
