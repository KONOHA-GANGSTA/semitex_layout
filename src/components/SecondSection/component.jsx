import styles from "./style.module.css";
import HIGH_QUALITY_IQON from "../../assets/highQualityProduction.png";
import INDIVIDUAL_ICON from "../../assets/IndividualApproach.png";
import FREE_ICON from "../../assets/freeShipping.png";
import SELECTABLE_ICON from "../../assets/selectableAnalogy.png";
import RESERVABLE_ICON from "../../assets/reservable.png";
import FLEXIBLE_ICON from "../../assets/flexibleSys.png";
import { Tile } from "../Tile/component";

export const SecondSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.headline}>
          <div className={styles.header}>Почему с нами выгодно?</div>
          <div className={styles.description}>
            С 1996 года мы занимаемся оптовыми поставками электронных
            компонентов от ведущих производителей из Европы и Азии для
            Российских потребителей.
          </div>
        </div>
        <div className={styles.tiles}>
          <Tile icon={HIGH_QUALITY_IQON} header="Качественная продукция">
            Все наши товары сертифицированы и имеют сопроводительную
            документацию.
          </Tile>
          <Tile icon={INDIVIDUAL_ICON} header="Индивидуальный подход">
            Возможность изготовления компонентов специально для вас на
            заводах-изготовителя.
          </Tile>
          <Tile icon={FREE_ICON} header="Бесплатная доставка">
            При наличии товара на складе и заказе от 10 000 рублей, доставим
            бесплатно по Москве и СПБ в течение 2х часов.
          </Tile>
          <Tile icon={SELECTABLE_ICON} header="Подбираем аналоги">
            Поможем подобрать аналоги популярных европейских брендов в условиях
            санкций.
          </Tile>
          <Tile icon={RESERVABLE_ICON} header="Резервный запас компонентов">
            Хранение товара на наших складах для постоянных клиентов.
          </Tile>
          <Tile icon={FLEXIBLE_ICON} header="Гибкая система оплаты">
            Отсрочка платежей для постоянных клиентов.
          </Tile>
        </div>
      </div>
    </section>
  );
};
