import styles from "./style.module.css";
import cn from "classnames";

export const Button = ({ title, className }) => {
  return <button className={cn(className, styles.layout)}>{title}</button>;
};
