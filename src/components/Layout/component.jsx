import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import { Contact } from "../Contact/component";
import WHATSAPP_ICON from "../../assets/whatsappIcon.png";
import styles from "./style.module.css";
import { Button } from "../Button/component";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <Contact logo={WHATSAPP_ICON} number="+7 (812) 313-58-45" />
      </Header>
      {children}
      <Footer className={styles.footer}>
        <Button title="ОСТАВИТЬ ЗАЯВКУ" className={styles.footer__button} />
      </Footer>
    </div>
  );
};
