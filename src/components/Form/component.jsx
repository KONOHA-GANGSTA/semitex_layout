import { Button } from "../Button/component";
import styles from "./style.module.css";
import LOCK_ICON from "../../assets/lock.png";

export const Form = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        Закажите обратный
        <br />
        звонок
      </div>
      <div className={styles.form}>
        <form>
          <div className={styles.form__row}>
            <div id="name_label">Ваше имя*</div>
            <input
              type="text"
              placeholder="Петров Петр"
              aria-labelledby="name_label"
              required
            />
          </div>
          <div className={styles.form__row}>
            <div id="tel_label">Ваш номер*</div>
            <input
              type="tel"
              placeholder="+7 (___) ___ __ __"
              aria-labelledby="tel_label"
              required
            />
          </div>
          <Button title="Заказать звонок" className={styles.button} />
          <div className={styles.secure}>
            <div>
              <img src={LOCK_ICON} alt="Надежно" />
            </div>
            <div>Мы гарантируем конфиденциальность данных</div>
          </div>
        </form>
      </div>
    </div>
  );
};
