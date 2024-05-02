import styles from "./style.module.css";

export const Contact = ({ logo, number }) => {
  return (
    <div className={styles.layout}>
      <div>
        <img src={logo} alt="Иконка Whatsapp" />
      </div>
      <div>{number}</div>
    </div>
  );
};
