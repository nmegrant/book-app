import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";

export default function DisplayQty({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  const current = [...state.books].find(
    (crtBook) => crtBook.title === book.title
  );

  return (
    <div>
      <h5>In Basket: {current ? current.quantity : "0"}</h5>
    </div>
  );
}
