import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Book App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my book site!</h1>

        <div className={styles.grid}>
          {books.items.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`}>
              <div className={styles.card}>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:Terry+Pratchett`
  );
  const books = await res.json();

  if (!books) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      books,
    }, // will be passed to the page component as props
  };
}
