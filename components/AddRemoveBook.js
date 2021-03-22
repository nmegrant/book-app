import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";

export default function AddRemoveBook({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD", payload: book })}>
        Add Book
      </button>
      <button onClick={() => dispatch({ type: "REMOVE", payload: book })}>
        Remove Book
      </button>
    </div>
  );
}
