import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nile (for book sellers and buyers)</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome Nile! A site for book sellers and buyers
        </h1>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
