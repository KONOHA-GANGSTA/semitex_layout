import { useState } from "react";
import styles from "./style.module.css";
import cn from "classnames";
import { AccordeonButton } from "../AccordeonButton/component";

export const Accordeon = ({ summary, children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={styles.layout}>
      <div className={cn(styles.headline, { [styles.opened]: opened })}>
        <div className={styles.summary}>{summary}</div>
        <AccordeonButton active={opened} callback={() => setOpened(!opened)} />
      </div>
      {opened && (
        <div className={cn(styles.content, { [styles.active]: opened })}>
          {children}
        </div>
      )}
    </div>
  );
};
