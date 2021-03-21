import React, { useContext } from "react";
import { CheckOutContext } from "../../state/CheckOutContext";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.css";

export default function Checkout() {
  const { state, dispatch } = useContext(CheckOutContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Checkout</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}>
          {state.length === 0 && (
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
          {state.length > 0 && (
            <div className={styles.smcontainer}>
              <h3>Your basket</h3>
              {state.map((book) => (
                <div className={styles.smcontainer} key={book.id}>
                  <p>{book.title}</p>
                  <p>By {book.author}</p>
                  <p>Price {book.price}</p>
                  <p>Quantity: {book.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
