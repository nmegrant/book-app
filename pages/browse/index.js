import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Browse() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Browser for Books</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Browse for books</h1>
        <h3 className={styles.description}>
          Filter by genre or search by author/title
        </h3>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
