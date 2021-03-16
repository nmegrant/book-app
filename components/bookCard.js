import styles from "../styles/home.module.css";
import Link from "next/link";

export default function BookCard({
  id,
  title,
  author,
  description,
  price,
  stock,
  rating,
}) {
  return (
    <Link href={`/browse/${id}`}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <h5>by {author}</h5>
        <p>{description}</p>
        <h5>price: ${price}</h5>
        <h5>stock: {stock}</h5>
        <h5>rating: {rating}/5</h5>
      </div>
    </Link>
  );
}
