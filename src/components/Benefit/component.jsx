import CHECK_ICON from "../../assets/check.png";
import styles from "./style.module.css";

export const Benefit = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <img src={CHECK_ICON} alt="Галочка" />
      </div>
      <div>{children}</div>
    </div>
  );
};
