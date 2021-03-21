import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";

export default function AddBook({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  return (
    <button onClick={() => dispatch({ type: "ADD", payload: book })}>
      Add Book
    </button>
  );
}
