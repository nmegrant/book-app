import { useState } from "react";
import Head from "next/head";
import styles from "../../styles/home.module.css";
import BookCard from "../../components/BookCard";

export default function Browse(props) {
  const [books, setBooks] = useState(props.data || []);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [inStock, setInStock] = useState(null);

  const handleSortByRating = (event) => {
    if (event.target.value === "none") {
      setBooks([...books]);
    } else if (event.target.value === "lowest") {
      setBooks([...books.sort((a, b) => a.rating - b.rating)]);
    } else if (event.target.value === "highest") {
      setBooks([...books.sort((a, b) => b.rating - a.rating)]);
    }
  };

  const handleSortByPrice = (event) => {
    if (event.target.value === "none") {
      setBooks([...books]);
    } else if (event.target.value === "lowest") {
      setBooks([...books.sort((a, b) => a.rating - b.rating)]);
    } else if (event.target.value === "highest") {
      setBooks([...books.sort((a, b) => b.rating - a.rating)]);
    }
  };

  const handleSortByInStock = (event) => {
    if (event.target.value === "none") {
      setBooks([...books]);
    } else if (event.target.value === "inStock") {
      setBooks([...books.filter((book) => book.stock > 0)]);
    }
  };

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
            <select name="rating" id="rating" onChange={handleSortByRating}>
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label for="price">Sort by price: </label>
            <select name="price" id="price" onChange={handleSortByPrice}>
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label for="inStock">Sort by in stock: </label>
            <select name="inStock" id="inStock" onChange={handleSortByInStock}>
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
