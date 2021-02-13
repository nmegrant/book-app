import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Book App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my book!</h1>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
