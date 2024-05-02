import styles from "./style.module.css";
import PROCESS_SCHEMA from "../../assets/proccess_schema.png";
import { Button } from "../Button/component";

export const ForthSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.header}>Схема работы</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis
          imperdiet sit mauris. Vitae sit in fusce massa amet.
        </div>
        <div className={styles.schema}>
          <img src={PROCESS_SCHEMA} alt="Схема процесса" />
        </div>
        <Button title="Оставить заявку" className={styles.button} />
      </div>
    </section>
  );
};
