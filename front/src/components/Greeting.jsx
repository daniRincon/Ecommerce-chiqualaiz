import styles from "../css-modules/greeting.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Link to="/editprofile">
      <h6 className={styles.greeting}>
        Hola <span id={styles.userprofile}>{props.name}!</span>
      </h6>
    </Link>
  );
};
