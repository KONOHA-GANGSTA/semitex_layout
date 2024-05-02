import { Benefit } from "../Benefit/component";
import { Form } from "../Form/component";
import styles from "./style.module.css";

export const FirstSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div>
          <div className={styles.headline_type1}>ОПТОВЫЕ ПОСТАВКИ</div>
          <div className={styles.headline_type2}>электронных компонентов</div>
          <div className={styles.headline_type1}>ИЗ КИТАЯ ДЕНЬ В ДЕНЬ</div>
          <div className={styles.description}>
            Комплексные поставки электронных компонентов и оборудования.
            <br></br>
            Подберем аналоги популярных брендов из Европы в условиях санкций.
          </div>
          <div className={styles.benefits}>
            <Benefit>Отсрочка платежей для постоянных клиентов</Benefit>
            <Benefit>
              Бесплатная доставка по Москве и СПБ в течение 2х часов
            </Benefit>
            <Benefit>Квалифицированный персональный менеджер</Benefit>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
