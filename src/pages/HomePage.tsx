import React from "react";
import CakeList from "../components/CakeList/CakeList";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";

const HomePage: React.FC = () => (
  <>
    <Header />
    <CakeList />
    <Gallery />
  </>
);

export default HomePage;