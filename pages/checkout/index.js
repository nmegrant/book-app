import Head from "next/head";
import styles from "../../styles/home.module.css";

export default function Checkout() {
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
