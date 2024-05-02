import styles from "./style.module.css";

export const Logo = ({ title }) => {
  return <div className={styles.layout}>{title}</div>;
};
