import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function BookPage() {
  const {
    query: { id },
  } = useRouter();
  const [book, setBook] = useState();

  useEffect(async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=id:${id}`
    );
    const book = await res.json();
    setBook(book);
  }, []);

  console.log(book);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Book Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my book page!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{book && book.items[0].volumeInfo.title}</h3>
            <p>{book && book.items[0].volumeInfo.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
