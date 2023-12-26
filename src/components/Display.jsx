import styles from "./Display.module.css";

export default function Display({ value }) {
  return (
    <div>
      <input type="text" className={styles.display} value={value} readOnly />
    </div>
  );
}
