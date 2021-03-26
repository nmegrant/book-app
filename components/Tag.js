import styles from "../styles/home.module.css";

export default function Tag({ tag }) {
  return (
    <p key={tag} className={styles.tag}>
      {tag}
    </p>
  );
}
