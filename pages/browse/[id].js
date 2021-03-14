import Head from "next/head";
import styles from "../../styles/home.module.css";

export default function Browse() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Book Title</h1>
        <h3 className={styles.description}>Book description</h3>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
