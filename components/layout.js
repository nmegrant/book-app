import Link from "next/link";
import styles from "../styles/layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Nile (for book sellers and buyers)</title>
        <link rel="icon" href="/beach-read.JPG" />
      </Head>
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
