import React, { useContext } from "react";
import { CheckOutContext } from "../state/CheckOutContext";

export default function DisplayQty({ book }) {
  const { state, dispatch } = useContext(CheckOutContext);

  const current = [...state].find((crtBook) => crtBook.title === book.title);

  return (
    <div>
      <p>In Basket: {current ? current.quantity : "0"}</p>
    </div>
  );
}
