import React from "react";
import styles from "./CakeCard.module.css";

interface CakeCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CakeCard: React.FC<CakeCardProps> = ({ name, description, price, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.textWrap}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.priceWrap}>
          <div className={styles.price}>{price} ₽/шт.</div>
          <div className={styles.buttonWrap}>
            <a href="#" className={styles.orderButton}>Заказать</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;