import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/home.module.css";

export default function Browse() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Book Title</h1>
        <h3 className={styles.description}>Book description</h3>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
