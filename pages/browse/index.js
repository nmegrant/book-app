import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/home.module.css";
import BookCard from "../../components/BookCard";

export default function Browse(props) {
  const [books, setBooks] = useState(props.data || []);
  const [sortedBooks, setSortedBooks] = useState(null);
  const [genres, setGenres] = useState(props.genreData);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      setSortedBooks([
        ...books.filter(
          (book) =>
            selectedGenres.findIndex((gen) => book.genre.includes(gen)) >= 0
        ),
      ]);
    }
  }, [selectedGenres]);

  const handleFilterByGenre = (event) => {
    setSelectedGenres([...selectedGenres, event.target.value]);
  };

  const handleSortByRating = (event) => {
    if (event.target.value === "none") {
      setSortedBooks(null);
    } else if (event.target.value === "lowest") {
      setSortedBooks([...books.sort((a, b) => a.rating - b.rating)]);
    } else if (event.target.value === "highest") {
      setSortedBooks([...books.sort((a, b) => b.rating - a.rating)]);
    }
  };

  const handleSortByPrice = (event) => {
    if (event.target.value === "none") {
      setSortedBooks(null);
    } else if (event.target.value === "lowest") {
      setSortedBooks([...books.sort((a, b) => a.price - b.price)]);
    } else if (event.target.value === "highest") {
      setSortedBooks([...books.sort((a, b) => b.price - a.price)]);
    }
  };

  const handleSortByInStock = (event) => {
    if (event.target.value === "none") {
      setSortedBooks(null);
    } else if (event.target.value === "inStock") {
      setSortedBooks([...books.filter((book) => book.stock > 0)]);
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
            <label htmlFor="rating">Sort by rating: </label>
            <select name="rating" id="rating" onChange={handleSortByRating}>
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="price">Sort by price: </label>
            <select name="price" id="price" onChange={handleSortByPrice}>
              <option value="none">none</option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="inStock">Sort by in stock: </label>
            <select name="inStock" id="inStock" onChange={handleSortByInStock}>
              <option value="none">none</option>
              <option value="inStock">in stock</option>
            </select>
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="genres">Filter by genre: </label>
            <select name="genres" id="genres" onChange={handleFilterByGenre}>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.grid}>
          {books &&
            (sortedBooks || books).map((book) => (
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

  const res2 = await fetch(`http://localhost:3000/api/genres`);
  const genreData = await res2.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, genreData },
  };
}
