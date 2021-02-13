import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.navItem}>Main Page</a>
        </Link>
        <Link href="/browse">
          <a className={styles.navItem}>Browse</a>
        </Link>
        <Link href="/checkout">
          <a className={styles.navItem}>Checkout</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

// 239, 189, 235 Pink lavender
// 182, 140, 184 African violet
// 100, 97, 160 Dark blue grey
// 49, 76, 182 Violet blue
// 10, 15, 13 Rich black
