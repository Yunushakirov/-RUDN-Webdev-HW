import React from "react";
import styles from "./Gallery.module.css";

import photo1 from "../../assets/img/photo.png";
import photo2 from "../../assets/img/photo2.png";
import photo3 from "../../assets/img/photo3.png";
import photo4 from "../../assets/img/photo4.png";
import photo5 from "../../assets/img/photo5.png";
import photo6 from "../../assets/img/photo6.png";
import photo7 from "../../assets/img/photo7.png";
import photo8 from "../../assets/img/photo8.png";
import photo9 from "../../assets/img/photo9.png";

const images = [
  photo1, photo2, photo3,
  photo4, photo5, photo6,
  photo7, photo8, photo9
];

const Gallery: React.FC = () => (
  <section className={styles.gallery}>
    <div className={styles.container}>
      <div className={styles.galleryHeader}>
        <h2 className={styles.galleryTitle}>Сделали более 3.000 заказов за 2 года</h2>
        <p className={styles.galleryDescription}>
          Посмотрите фото реальных заказов из нашего Instagram
        </p>
      </div>

      <ul className={styles.galleryGrid}>
        {images.map((src, idx) => (
          <li key={idx} className={styles.galleryItem}>
            <img src={src} alt={`Фото заказа ${idx + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Gallery;