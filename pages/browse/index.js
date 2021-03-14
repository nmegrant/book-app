import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Browse(props) {
  const books = props.data || [];
  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Browser for Books</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Browse for books</h1>
        <h3 className={styles.description}>
          Filter by genre or search by author/title
        </h3>
        <div className={styles.grid}>
          {books && books.map((book) => <div>{book.title}</div>)}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/books`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
