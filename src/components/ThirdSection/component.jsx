import styles from "./style.module.css";
import EAIER_LOGO from "../../assets/man1.png";
import FORYARD_LOGO from "../../assets/man2.png";
import FUJICON_LOGO from "../../assets/man3.png";
import GRASS_LOGO from "../../assets/man4.png";
import MARQUIS_LOGO from "../../assets/man5.png";
import { Carusel } from "../Carusel/component";

export const ThirdSection = () => {
  const pictures = [
    EAIER_LOGO,
    FORYARD_LOGO,
    FUJICON_LOGO,
    GRASS_LOGO,
    MARQUIS_LOGO,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.header}>Наши производители</div>
        <div className={styles.carusel}>
          <Carusel pictures={pictures} />
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod
          felis id quisque nunc. Non orci lacus elit mauris velit gravida
          imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida consequat
          et euismod aenean quis mauris. Ut etiam egestas ultrices faucibus
          ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper
          eleifend. Id at commodo interdum et leo.
        </div>
      </div>
    </section>
  );
};
