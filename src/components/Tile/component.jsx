import styles from "./style.module.css";

export const Tile = ({ children, icon, header }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.icon}>
        <img src={icon} alt="Иконка" />
      </div>
      <div className={styles.header}>{header}</div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};
