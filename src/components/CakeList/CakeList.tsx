import React from "react";
import CakeCard from "../CakeCard/CakeCard";
import styles from "./CakeList.module.css";

import imgKrem from "../../assets/img/кремовый-замок.png";
import imgMalina from "../../assets/img/малиновый-рай.png";
import imgFeyer from "../../assets/img/фейверк.png";
import imgMys from "../../assets/img/мыс-безумия.png";
import imgObl from "../../assets/img/облачная-сказка.png";
import imgTem from "../../assets/img/темный-рыцарь.png";

type Cake = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const cakes: Cake[] = [
  { name: "Кремовый замок", description: "Нежный крем любого цвета на выбор, ванильная основа", price: 150, image: imgKrem },
  { name: "Малиновый рай", description: "Воздушный крем, темная основа и ягода малины", price: 150, image: imgMalina },
  { name: "Фейерверк", description: "Разноцветный крем, с бисквитной основой", price: 150, image: imgFeyer },
  { name: "Мыс безумия", description: "Разноцветная основа, стружка и нежный крем", price: 150, image: imgMys },
  { name: "Облачная сказка", description: "Светлая основа, нежный крем со стружкой сверху", price: 150, image: imgObl },
  { name: "Темный рыцарь", description: "Темная основа, нежный крем и вкусные шарики", price: 150, image: imgTem },
];

const CakeList: React.FC = () => (
  <section className={styles.assortmentSection}>
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.bigTitle}>Для любых событий и дорогих вам людей</h2>
      </div>

      <div className={styles.cardsWrap}>
        {cakes.map((cake, index) => (
          <CakeCard key={index} name={cake.name} description={cake.description} price={cake.price} image={cake.image} />
        ))}
      </div>
    </div>
  </section>
);

export default CakeList;