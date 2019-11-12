import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import styles from "../css-modules/historial.module.css";
const Historial = (props) => {
  return (
    <div>
      <button
        id="history-button"
        className={styles.fixedbtn + " btn  btn-info"}
        onClick={() => {
          $("#history-button").toggleClass("moved");
          $("#slider-history").toggleClass("open");
        

        }}
      >
          <PersonIcon  style={{fontSize:"35px"}}/>
      </button>

      <div id="slider-history" className={"container " + styles.drawer}>
        <div className="shopping-cart">
          <div className="shopping-cart-head">
              <h4 className={styles.title}>Historial</h4>
          </div>
          <ul className="shopping-cart-list">
             {props.historial.length?( props.historial.map((pedido, index)=>{
                 return(
                     <div key={index}>
                         <li>Pedido </li>
                     </div>
                 )
             })): "No orders found..."}
          </ul>
          <div className="cart-buttons">
      
     
          </div>
        </div>
      </div>
    </div>
  );
};


export default Historial;
