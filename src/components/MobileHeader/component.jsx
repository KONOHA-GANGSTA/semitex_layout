import { useState } from "react";
import styles from "./style.module.css";
import MENU_ICON from "../../assets/menu.svg";
import cn from "classnames";

export const MobileHeader = ({ list, className }) => {
  const [opened, setOpened] = useState();
  return (
    <div
      className={cn(styles.layout, className)}
      onClick={() => setOpened(!opened)}
    >
      <img src={MENU_ICON} alt="Меню" />
      {opened && (
        <div className={styles.list}>
          {list.map((el, ind) => {
            return (
              <div key={ind} className={styles.item}>
                {el}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
