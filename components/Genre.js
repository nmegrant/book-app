import styles from "../styles/home.module.css";

export default function Genre({ gen }) {
  return (
    <p key={gen} className={styles.genre}>
      {gen}
    </p>
  );
}
