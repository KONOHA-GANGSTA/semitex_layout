import { NavTab } from "../NavTab/component";
import styles from "./style.module.css";

export const Navigation = ({ titles }) => {
  return (
    <nav>
      <div className={styles.layout}>
        {titles.map((el, ind) => (
          <NavTab title={el} key={ind} />
        ))}
      </div>
    </nav>
  );
};
