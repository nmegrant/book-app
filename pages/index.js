import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  console.log(books);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Book App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my book!</h1>

        <div className={styles.grid}>
          {books.items.map((book) => (
            <div className={styles.card} key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.description}</p>
            </div>
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
