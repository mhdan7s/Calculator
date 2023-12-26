import styles from "./ButtonContainer.module.css";

export default function ({ buttonClicked }) {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "9",
    "0",
    "=",
  ];
  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <button
          key={button}
          className={styles.button}
          onClick={() => buttonClicked(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
