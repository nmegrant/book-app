import React, { useContext, useState } from "react";
import { CheckOutContext } from "../../state/CheckOutContext";
import CheckoutItem from "../../components/CheckoutItem";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.css";

const Basket = ({ books }) => (
  <div className={styles.smcontainer}>
    <h3>Your basket</h3>
    {books.map((book) => (
      <CheckoutItem key={book.id} book={book} />
    ))}
  </div>
);

const Address = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className={styles.smcontainer}>
      <h1>Enter your info and shipping address</h1>
      <form onSubmit={(event) => onHandleSubmit(event)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" />
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
        <input className={styles.submitButton} type="submit" />
      </form>
    </div>
  );
};

export default function Checkout() {
  const { state, dispatch } = useContext(CheckOutContext);
  const [basket, setBasket] = useState(true);
  const [address, setAddress] = useState(false);

  const handleLeftClick = () => {
    if (address) {
      setAddress(false);
      setBasket(true);
    }
  };

  const handleRightClick = () => {
    if (basket) {
      setBasket(false);
      setAddress(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Checkout</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.checkoutgrid}>
          {state.books.length === 0 && (
            <>
              <h3>You have no books in your basket.</h3>
              <p>
                <Link href={`/browse/`}>
                  <span className={styles.link}>Browse our selection</span>
                </Link>{" "}
                and add books to your basket, then come back here to complete
                the purchase.
              </p>
            </>
          )}
          {state.books.length > 0 && address && (
            <button className={styles.chevron} onClick={handleLeftClick}>
              {"\u2039"}
            </button>
          )}
          {state.books.length > 0 && basket && <Basket books={state.books} />}
          {state.books.length > 0 && address && <Address />}
          {state.books.length > 0 && basket && (
            <button className={styles.chevron} onClick={handleRightClick}>
              {"\u203A"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
