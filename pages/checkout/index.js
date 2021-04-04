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

const Address = () => <h1>Enter your info and address</h1>;

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
        <button onClick={handleLeftClick}>Left</button>
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
          {state.books.length > 0 && basket && <Basket books={state.books} />}
          {state.books.length > 0 && address && <Address />}
        </div>
        <button onClick={handleRightClick}>Right</button>
      </main>
    </div>
  );
}
