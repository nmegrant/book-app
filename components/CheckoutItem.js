import styles from "../styles/home.module.css";

export default function CheckoutItem({ book }) {
  return (
    <div className={styles.smcontainer}>
      <h2>Item</h2>
      <h3>{book.title}</h3>
      <h4>By: {book.author}</h4>
      <h4>Price: {book.price}</h4>
      <h3>Quantity: {book.quantity}</h3>
    </div>
  );
}
