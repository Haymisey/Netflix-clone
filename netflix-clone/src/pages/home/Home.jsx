import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/header";
import Banner from "../../Components/Banner/Banner";
import RowList from "../../Components/Rows/RowList/RowList";

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
    </>
  );
}
