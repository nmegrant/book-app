import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nile (for book sellers and buyers)</title>
        <link rel="icon" href="/beach-read.JPG" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Nile!</h1>
        <h3 className={styles.description}>
          A site for book sellers and buyers
        </h3>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
