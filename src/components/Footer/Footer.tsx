import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.topRow}>
            <a href="#" className={styles.footerLink}>Согласие на обработку данных</a>
            <a href="#" className={styles.footerLink}>Служба поддержки</a>
            <a href="#" className={styles.footerLink}>Политика конфиденциальности</a>
          </div>
          
          <div className={styles.bottomRow}>
            <div className={styles.copyright}>
              © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;