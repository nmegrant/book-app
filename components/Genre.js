import styles from "../styles/home.module.css";

export default function Genre({ genre }) {
  return (
    <p key={genre} className={styles.genre}>
      {genre}
    </p>
  );
}
