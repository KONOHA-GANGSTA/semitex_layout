import styles from "./style.module.css";
import LEFT_ARROW from "../../assets/leftArrow.png";
import RIGHT_ARROW from "../../assets/rightArrow.png";
import { useRef } from "react";

export const Carusel = ({ pictures }) => {
  const ref = useRef();
  return (
    <div className={styles.layout}>
      <div className={styles.arrow}>
        <img
          src={LEFT_ARROW}
          alt="Влево"
          onClick={() =>
            (ref.current.scrollLeft = ref.current.scrollLeft - 300)
          }
        />
      </div>
      <div className={styles.horizontalMediaScroller} ref={ref}>
        {pictures.map((el, ind) => {
          return (
            <div key={ind}>
              <picture>
                <img alt="Партнер" src={el} />
              </picture>
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrow}
        onClick={() => (ref.current.scrollLeft = ref.current.scrollLeft + 300)}
      >
        <img src={RIGHT_ARROW} alt="Вправо" />
      </div>
    </div>
  );
};
