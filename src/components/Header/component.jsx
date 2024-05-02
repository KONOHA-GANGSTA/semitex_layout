import { Logo } from "../Logo/component";
import { Navigation } from "../Navigation/component";
import PAGES_LIST from "../../constants/pagesList";
import styles from "./style.module.css";
import cn from "classnames";

export const Header = ({ children, className }) => {
  return (
    <div className={cn(styles.layout, className)}>
      <div className={styles.container}>
        <Logo title="SEMITEX" />
        <Navigation titles={PAGES_LIST} />
        {children}
      </div>
    </div>
  );
};
