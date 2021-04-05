import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.css";

export default function PurchaseComplete() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Purchase Successful</title>
      </Head>

      <main className={styles.main}>
        <h5 className={styles.title}>Purchase Successful</h5>
        <p>
          <Link href={`/browse/`}>
            <span className={styles.link}>Back to Browse</span>
          </Link>
        </p>
      </main>
    </div>
  );
}
