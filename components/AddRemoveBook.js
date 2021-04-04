import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";
import styles from "../styles/home.module.css";

export default function AddRemoveBook({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  const index = state.findIndex((stateBook) => stateBook.title === book.title);

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

export async function getStaticProps(props) {
  const res = await fetch(`http://localhost:3000/api/stock`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
