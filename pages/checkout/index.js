import React, { useContext } from "react";
import { CheckOutContext } from "../../state/CheckoutContext";
import Head from "next/head";
import styles from "../../styles/home.module.css";

export default function Checkout() {
  const { state, dispatch } = useContext(CheckOutContext);

  console.log(state);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Checkout</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
