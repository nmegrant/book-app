import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";
import styles from "../styles/home.module.css";

export default function AddRemoveBook({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "ADD", payload: book })}
        className={styles.counterbutton}
      >
        Add Book
      </button>
      <button
        onClick={() => dispatch({ type: "REMOVE", payload: book })}
        className={styles.counterbutton}
      >
        Remove Book
      </button>
    </div>
  );
}
