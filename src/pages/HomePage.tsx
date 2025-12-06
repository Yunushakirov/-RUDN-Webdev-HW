import React from "react";
import CakeList from "../components/CakeList/CakeList";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage: React.FC = () => (
  <>
    <Header />
    <CakeList />
    <Gallery />
    <Footer />
  </>
);

export default HomePage;