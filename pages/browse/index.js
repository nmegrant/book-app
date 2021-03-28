import Head from "next/head";
import styles from "../../styles/home.module.css";
import BookCard from "../../components/BookCard";

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
        <div className={styles.sortFieldsContainer}>
          <div className={styles.fieldContainer}>
            <label for="rating">Sort by rating: </label>
            <select
              name="rating"
              id="rating"
              onChange={(event) => console.log(event.target.value)}
            >
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label for="price">Sort by rating: </label>
            <select
              name="price"
              id="price"
              onChange={(event) => console.log(event.target.value)}
            >
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label for="inStock">Sort by in stock: </label>
            <select
              name="inStock"
              id="inStock"
              onChange={(event) => console.log(event.target.value)}
            >
              <option value="none">none</option>
              <option value="inStock">in stock</option>
            </select>
          </div>
        </div>
        <div className={styles.grid}>
          {books &&
            books.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                genre={book.genre}
                price={book.price}
                stock={book.stock}
                rating={book.rating}
              />
            ))}
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
