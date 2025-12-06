import React from "react";
import styles from "./Heeader.module.css";

import addressIcon from "../../assets/img/icon.svg";
import phoneIcon from "../../assets/img/Vector.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
          
            <div className={styles.logoText}>
              <div className={styles.logoTitle}>Сладкий сундук</div>
            
            </div>
          </div>
          
          <div className={styles.rightSection}>

             <div className={styles.phoneSection}>
             
           
              <div className={styles.phoneText}>
               <img src={addressIcon} alt="Адрес" className={styles.contactIcon} />
                <div className={styles.workHours}>г. Санкт Петербург, <br />ул. Куйбышева 31</div>
              </div>
            </div>

            <div className={styles.phoneSection}>
             
                  <img src={phoneIcon} alt="Телефон" className={styles.contactIcon} />
              <div className={styles.phoneText2}>
                <div className={styles.phone}>8 (812) 844-95-49</div>
                <div className={styles.workHours}>Ежедневно с 9:00 до 20:00</div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;