import AddRemoveBook from "../components/AddRemoveBook";
import Tag from "./Tag";
import styles from "../styles/home.module.css";
import Link from "next/link";
import DisplayQty from "./DisplayQty";

export default function BookCard({
  id,
  title,
  author,
  description,
  genre,
  price,
  stock,
  rating,
}) {
  const book = { id, title, author, description, price, stock, rating };
  return (
    <div className={styles.card}>
      <Link href={`/browse/${id}`}>
        <div>
          <h1>{title}</h1>
          <h5>by {author}</h5>
          <div>
            {genre.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
          <p>{description}</p>
          <h5>
            price:{" "}
            {new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(book.price)}
          </h5>
          <h5>stock: {stock}</h5>
          <h5>rating: {rating}/5</h5>
        </div>
      </Link>
      <div className={styles.cardFooter}>
        <AddRemoveBook book={book} />
        <DisplayQty book={book} />
      </div>
    </div>
  );
}
