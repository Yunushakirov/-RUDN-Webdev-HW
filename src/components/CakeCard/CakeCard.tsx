import React, { useState } from "react";
import styles from "./CakeCard.module.css";

interface CakeCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CakeCard: React.FC<CakeCardProps> = ({ name, description, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const [isCounterActive, setIsCounterActive] = useState(false);

  const handleOrderClick = () => {
    setIsCounterActive(true);
    setQuantity(1);
  };

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(0);
      setIsCounterActive(false);
    }
  };

  const totalPrice = price * quantity;

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
            {!isCounterActive ? (
              <button className={styles.orderButton} onClick={handleOrderClick}>
                Заказать
              </button>
            ) : (
              <div className={styles.counterWrapper}>
                <div className={styles.counter}>
                  <button className={styles.counterButton} onClick={decrement}>-</button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button className={styles.counterButton} onClick={increment}>+</button>
                </div>
                <div className={styles.totalPrice}>{totalPrice} ₽</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;