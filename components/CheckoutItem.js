import AddRemoveBook from "../components/AddRemoveBook";
import styles from "../styles/home.module.css";

export default function CheckoutItem({ book }) {
  return (
    <div className={styles.itemcontainer}>
      <table className={styles.table}>
        <tr>
          <th className={styles.cell}>Item</th>
          <th className={styles.cell}>Price</th>
          <th className={styles.cell}>Quantity</th>
          <th className={styles.cell}>Total</th>
          <th></th>
        </tr>
        <tr>
          <td className={styles.cell}>{book.title}</td>
          <td rowspan="2" className={styles.cell}>
            ${book.price}
          </td>
          <td rowspan="2" className={styles.cell}>
            {book.quantity}
          </td>
          <td rowspan="2" className={styles.cell}>
            {book.price * book.quantity}
          </td>
          <td className={styles.cell}>
            <AddRemoveBook book={book} />
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>By {book.author}</td>
        </tr>
      </table>
    </div>
  );
}
