import Head from "next/head";
import AddRemoveBook from "../../components/AddRemoveBook";
import Genre from "../../components/Genre";
import styles from "../../styles/home.module.css";
import DisplayQty from "../../components/DisplayQty";

export default function Book({ book }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>{book.title}</h1>
          <h5>by {book.author}</h5>
          <div className={styles.genreContainer}>
            {book.genre.map((gen) => (
              <Genre genre={gen} />
            ))}
          </div>
          <h3 className={styles.description}>{book.description}</h3>
          <div className={styles.bookInfo}>
            <p>
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
              }).format(book.price)}
            </p>
            <p>rating: {book.rating}</p>
            <p>stock: {book.stock}</p>
          </div>
        </div>
        <AddRemoveBook book={book} />
        <DisplayQty book={book} />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();

  const paths = books.map((book) => ({
    params: { bookId: book.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { bookId } = params;

  const res = await fetch(`http://localhost:3000/api/books/${bookId}`);
  const book = await res.json();

  return { props: { book } };
}
