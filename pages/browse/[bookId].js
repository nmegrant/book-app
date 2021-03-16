import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/home.module.css";

export default function Book({ book }) {
  console.log(book);
  const router = useRouter();
  const {
    query: { bookId },
  } = router;
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{book.title}</h1>
        <h5>by {book.author}</h5>
        <h3 className={styles.description}>{book.description}</h3>
        <p>${book.price}</p>
        <p>{book.rating}</p>
        <p>{book.stock}</p>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = books.map((book) => ({
    params: { bookId: book.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { bookId } = params;
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:3000/api/books/${bookId}`);
  const book = await res.json();

  // Pass post data to the page via props
  return { props: { book } };
}
