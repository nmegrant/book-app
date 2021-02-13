import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Checkout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
