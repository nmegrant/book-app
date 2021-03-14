import styles from "../styles/bookcard.module.css";

export default function BookCard({
  title,
  author,
  description,
  price,
  stock,
  rating,
}) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <h5>by {author}</h5>
      <p>{description}</p>
      <h5>price: ${price}</h5>
      <h5>stock: {stock}</h5>
      <h5>rating: {rating}/5</h5>
    </div>
  );
}
