import styles from "./style.module.css";
import ARROW_ICON from "../../assets/arrowDown.svg";
import cn from "classnames";

export const AccordeonButton = ({ active, callback }) => {
  return (
    <div
      className={cn(styles.layout, { [styles.active]: active })}
      onClick={callback}
    >
      <img src={ARROW_ICON} alt="Развернуть" />
    </div>
  );
};
